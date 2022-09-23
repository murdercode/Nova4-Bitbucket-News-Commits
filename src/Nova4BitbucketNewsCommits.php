<?php

namespace Murdercode\Nova4BitbucketNewsCommits;

use Laravel\Nova\Card;

class Nova4BitbucketNewsCommits extends Card
{
    /**
     * The width of the card (1/3, 1/2, or full).
     *
     * @var string
     */
    public $width = '1/3';

    /**
     * Return commits from the repository.
     *
     * @return $this
     */
    public function commits(?string $customRepository)
    {
        return $this->withMeta(
            [
                'commits' => (new BitbucketAPI())->getCommits($customRepository),
            ]
        );
    }

    /**
     * Set a limit to the number of commits to display.
     *
     * @param int $limit
     * @return $this
     */
    public function limit(int $amount = 10)
    {
        return $this->withMeta([
                'limit' => $amount,
            ]
        );
    }

    /**
     * Get the component name for the element.
     *
     * @return string
     */
    public function component()
    {
        return 'nova4-bitbucket-news-commits';
    }
}
