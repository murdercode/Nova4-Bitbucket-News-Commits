<template>
  <Card class="flex flex-col items-center justify-center">
    <div class="px-3 py-3">
      <h1 class="text-center text-3xl text-gray-500 font-light">
       Dev {{card.commits.length}} commits
      </h1>
      
      <div v-if="card.commits.error">
        <p class="text-center text-gray-500">
          {{ card.commits.error }}
        </p>
      </div>

      <ul v-if="!card.commits.error" class="divide-y list-disc list-inside space-y-2">
        <li v-for="commit in card.commits.splice(0, card.limit)" class="ml-2 border-l-2">
          <h3 class="font-semibold inline">{{ commit.message }}</h3>
          <p class="block text-xs">{{ commit.date }} - by {{ commit.author.raw }}</p>
        </li>
      </ul>

    </div>
  </Card>
</template>

<script>
export default {
  props: [
    'card',

    // The following props are only available on resource detail cards...
    // 'resource',
    // 'resourceId',
    // 'resourceName',
  ],

  mounted() {
  },

}
</script>
