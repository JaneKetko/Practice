
const methods = (function() {
	return {
		getPhotoPosts(skip = 0, top = 10, filterConfig) {
			
			if (typeof skip !== "number" || typeof top !== "number") {
                return;
            }

            let posts = this;
			
            if (typeof filterConfig === "object") {
                posts = posts.filter((post) => {
					
					if (filterConfig.hasOwnProperty("date")) {
						if(Date.parse(post.createdAt) !== Date.parse(filterConfig.date))                                                 
                            return false;
					}
                    if (filterConfig.hasOwnProperty("author")) {
                        if (filterConfig.author !== post.author)
                            return false;
                    }
                    if (filterConfig.hasOwnProperty("hashTags")) {
                        if (!filterConfig.hashTags.every((tag) => {
                            return post.hashTags.includes(tag);
                        }))
                            return false;
                    }
                    return true;
                });
            }

            return posts.slice(skip, top + skip);
		},
		
		getPhotoPost(id) {
            if (typeof id !== "string" || id === "") {
                return;
            }

            return this.find((p) => {
                return p.id === id;
            });
        },
		
		validatePhotoPost(photoPost) {
            if (typeof photoPost !== "object")
                return false;
            if (typeof photoPost.id !== "string" || photoPost.id === "")
                return false;
            if (typeof photoPost.description !== "string" || photoPost.description === "" || photoPost.description.length > 200)
                return false;
            if (!(photoPost.createdAt instanceof Date))
                return false;
            if (typeof photoPost.author !== "string" || photoPost.author === "")
                return false;
            if (typeof photoPost.photoLink !== "string" || photoPost.photoLink === "")
                return false;
            if (!Array.isArray(photoPost.hashTags) || !Array.isArray(photoPost.hashTags))
                return false;

            return true;
        },

        validateEditPost(editPost) {
            if (typeof editPost !== "object") {
                return false;
            }

            if (editPost.hasOwnProperty("description")) {
                if (typeof editPost.description !== "string" || editPost.description === "")
                    return false;
            }
            if (editPost.hasOwnProperty("photoLink")) {
                if (typeof editPost.photoLink !== "string" || editPost.photoLink === "")
                    return false;
            }
            if (editPost.hasOwnProperty("hashTags")) {
                if (!Array.isArray(editPost.hashTags))
                    return false;
            }
            if (editPost.hasOwnProperty("likes")) {
                if (!Array.isArray(editPost.likes))
                    return false;
            }
            return true;

        },

		addPhotoPost(photoPost) {
			if (!this.validatePhotoPost(photoPost))
                return false;
			this.push(photoPost);
			this.sort((post1, post2) => {
                return post2.createdAt - post1.createdAt;
            });
            return true;
		},
		
		editPhotoPost(id, photoPost) {
            if (typeof id !== "string" || id === "" || typeof photoPost !== "object") {
                return false;
            }
            let post = this.getPhotoPost(id);
            if (post) {

                if (!this.validateEditPost(editPost)) {
                    return false;
                }

                if (photoPost.hasOwnProperty("description")) {
                    post.description = photoPost.description;
                }
                if (photoPost.hasOwnProperty("photoLink")) {
                    post.photoLink = photoPost.photoLink;
                }
                if (photoPost.hasOwnProperty("hashTags")) {
                    post.hashTags = photoPost.hashTags;
                }
                if (photoPost.hasOwnProperty("likes")) {
                    post.likes = photoPost.likes;
                }
                return true;
            }
            return false;
        },
		
		removePhotoPost(id) {
			if (typeof id !== "string" || id === "") {
                return false;
            }
			let posts = this;
			for (var i = 0; i < posts.length; ++i) {
				if(posts[i].id === id) {
					posts.splice(i, 1);
            		return true;
				}
			}
			
			return false;
		}
	}
})();

module.exports = methods;