# Nova4 Bitbucket News Commits

This card allows you to display the latest commits from your Bitbucket repository in Laravel Nova.

## How to start

First you need to install the package through composer:

```bash
composer require murdercode/nova4-bitbucket-news-commits
```

Then you need to add the following code in `config/services.php`:

```php
'nova4-bitbucket-news-commits' => [
    'folder' => env('NOVA_BITBUCKET_FOLDER', ''),
    'username' => env('NOVA_BITBUCKET_USERNAME', ''),
    'password' => env('NOVA_BITBUCKET_PASSWORD', ''),
    'repository' => env('NOVA_BITBUCKET_REPOSITORY', ''),
],
```

Now you can fill your `.env` file with the following variables:

```bash
NOVA_BITBUCKET_FOLDER=<your-bitbucket-folder> <- (sometimes it can be equal to the username)
NOVA_BITBUCKET_USERNAME=<your-bitbucket-username>
NOVA_BITBUCKET_PASSWORD=<your-bitbucket-password>
NOVA_BITBUCKET_REPOSITORY=<your-bitbucket-repository>
```

## How to use

Register your card in the dashboard or whatever you want.:

```php
use Murdercode\Nova4BitbucketNewsCommits\Nova4BitbucketNewsCommits;
//...

class Main extends Dashboard
{
    public function cards()
    {
        return [
            //new Help,
            (new Nova4BitbucketNewsCommits())->commits()->limit(10), // <-THIS LINE
        ];
    }
}

```

This tool uses your `CACHE_DRIVER` defined in `.env` to cache the data.
If you haven't defined it, you can reach your API limits.

## TODO

* Add a cache configuration
* Add localization
* Add a modal to show details of the commit
* and more!

This project is under development.
Feel free to contribute!