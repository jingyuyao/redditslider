/* A finite feed of posts.*/
class PostFeed {
    constructor(baseUri) {
        this.baseUri = baseUri;
    }

    /* Boolean indicating whether there
     * are more posts to get.
     */
    hasMore() {
        throw "Not implemented";
    }

    /* Return a promise for a list of Posts */
    getMore() {
        throw "Not implemented";
    }

    /*
     * Utilities
     */
    getJson(url) {
        return fetch(url)
            .then(this.checkStatus)
            .then(this.toJson);
    }

    checkStatus(response) {
        if (200 <= response.status < 300) {
            return Promise.resolve(response);
        }
        else {
            return Promise.reject(response);
        }
    }

    toJson(response) {
        return response.json();
    }
}

export default PostFeed;
