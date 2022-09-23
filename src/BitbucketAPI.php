<?php

namespace Murdercode\Nova4BitbucketNewsCommits;

use GuzzleHttp\Client;

class BitbucketAPI
{
    public function getCommits(string $repository)
    {
        $client = new Client();

        if($repository == null) {
            $repository = config('nova4-bitbucket-news-commits.repository');
        }

        $commits = cache()->remember('commits', now()->addMinutes(15), function () use ($client,
            $repository) {
            $response = $client->request(
                'GET',
                'https://api.bitbucket.org/2.0/repositories/' . config(
                    'services.nova4-bitbucket-news-commits.folder'
                ) . '/' . $repository . '/commits',
                [
                    'auth' => [
                        config('services.nova4-bitbucket-news-commits.username'),
                        config('services.nova4-bitbucket-news-commits.password'),
                    ],
                ]
            );
            $body = $response->getBody();
            $json = json_decode($body, true);
            return $json['values'];
        }
        );
        return $commits;
    }
}