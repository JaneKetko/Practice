const DOM = (function () {
	
	const user = "Jane Ketko";

	if (!user) {
        let button = document.createElement("button");
        button.classList.add("butt");
        button.classList.add("btn-login");
		document.querySelector(".btn-logout").replaceWith(button);
        document.querySelector(".btn-newPost").remove();
        document.querySelector(".user").textContent = "Гость";
    }
    const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
    }

    const main = document.querySelector('.main');

	function addPhotoPost(post) {
        const sign = document.createElement('div');
        sign.id = post.id;
        sign.className ='posts';

        const image_icon = document.createElement('img');
        image_icon.className ='post-icon';
        image_icon.setAttribute("align","left");
        image_icon.src = "images/icon.png";

        const text = document.createElement('div');
        text.className = 'text';

        const main_name = document.createElement('div');
        main_name.className = 'post-name';
        const name = document.createElement('p');
        name.textContent = post.author;

        const main_date = document.createElement('div');
        main_date.className = 'post-date';
        const date = document.createElement('p');
        date.textContent = post.createdAt.toLocaleString('ru-RU',options);


        const butt = document.createElement('div');
        butt.className = 'post-buttons';
        const image_like = document.createElement('img');
        image_like.className ='post-like';
        image_like.src = 'images/like.png';
        const likes = document.createElement('div');
        likes.className = 'post-likes';
        likes.textContent = post.likes.length;
        const del = document.createElement('button');
        del.className = 'btn-delete';
        const edit = document.createElement('button');
        edit.className = 'btn-edit';
        const image = document.createElement('img');
        image.className ='post-image';
        image.src = post.photoLink;
        const desc = document.createElement('div');
        desc.className = 'post-description';
        const descrip = document.createElement('p');
        descrip.textContent = post.description;
        const hashtags = document.createElement('div');
        hashtags.className = 'hashtags';
        hashtags.textContent = post.hashTags.join(' ');
        const br = document.createElement('br');

        sign.appendChild(image_icon);
        main_name.appendChild(name);
        text.appendChild(main_name);
        main_date.appendChild(date);
        text.appendChild(main_date);
        butt.appendChild(image_like);
        butt.appendChild(likes);
        if(post.author === user) {
            butt.appendChild(del);
            butt.appendChild(edit);
        }
        text.appendChild(butt);
        text.appendChild(image);
        desc.appendChild(descrip);
        text.appendChild(desc);
        text.appendChild(hashtags);
        sign.appendChild(text);
        main.appendChild(sign);
        main.appendChild(br);

    }

    function showPhotoPosts(posts) {
            for(let i = 0; i < posts.length; i++) {
                addPhotoPost(posts[i]);
            }
        }


    function removePhotoPost(id) {
        let post = document.getElementById(id);
        if (post) {
            post.remove();
            return true;
        }
        return false;
    }

    function editPhotoPost(id, post) {
        let postToEdit = document.getElementById(id);
        if (postToEdit) {
            let element = document.createElement("div");
            element.classList.add("posts");
            element.id = id;
            addPhotoPost(element);
            postToEdit.replaceWith(element);
        }
    }

     return {
         showPhotoPosts:showPhotoPosts,
         addPhotoPost:addPhotoPost,
         removePhotoPost:removePhotoPost,
         editPhotoPost:editPhotoPost
     }

})();

function showPosts() {
    let main = document.getElementsByClassName("main")[0];
    while (main.lastChild)
        main.lastChild.remove();
    DOM.showPhotoPosts(photoPosts.getPhotoPosts(undefined, undefined, filterConfig));
}

function editPhotoPost(id, newPost) {
    if (photoPosts.editPhotoPost(id, newPost)) {
        DOM.editPhotoPost(id, photoPosts.getPhotoPost(id));
        return true;
    }
    else
        return false;
}

function removePhotoPost(id) {
    if (photoPosts.removePhotoPost(id)) {
        if (DOM.removePhotoPost(id)) {
            let amount = document.getElementsByClassName("posts").length;
            if (amount < photoPosts.getPhotoPosts(0, photoPosts.length, filterConfig).length)
                DOM.addPhotoPost(photoPosts.getPhotoPosts(amount, 1, filterConfig)[0]);
            if (photoPosts.length <= amount + 1)
                document.getElementsByClassName("load-more")[0].style.display = "none";
        }
        return true;
    }
    return false;
}

function LoadMore() {
    let amount = document.getElementsByClassName("posts").length;
    if (amount < photoPosts.getPhotoPosts(0, photoPosts.length, filterConfig).length) {
        if (photoPosts.getPhotoPosts(0, photoPosts.length, filterConfig).length - amount <= 10)
            document.getElementsByClassName("load-more")[0].style.display = "none";
        DOM.showPhotoPosts(photoPosts.getPhotoPosts(amount, undefined, filterConfig));
    }
    else
        document.getElementsByClassName("load-more")[0].style.display = "none";
}

function addPhotoPost(post) {
    if (photoPosts.addPhotoPost(post)) {
        let main = document.getElementsByClassName("main")[0];
        while (main.lastChild)
            main.lastChild.remove();
        DOM.showPhotoPosts(photoPosts.getPhotoPosts());
        let amount = document.getElementsByClassName("posts").length;
        if (amount < photoPosts.length)
            document.getElementsByClassName("load-more")[0].style.display = "block";
        return true;
    }
    else return false;
}

showPosts();