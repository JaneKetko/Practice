
const photoPosts = [
  {
    id: '1',
    description: 'Всем привет! Хорошего настроения!',
    createdAt: new Date('2018-03-03T23:11:00'),
    author: 'Jane Ketko',
    photoLink: 'https://pp.userapi.com/c824603/v824603201/97abb/0rfsB5TNa_c.jpg',
	hashTags: ['#GoodLuck', '#Hello'],
    likes: ['Zhukova Katerina']
   },

   {
	id: '2',
    description: 'Веселая учеба:)',
    createdAt: new Date('2018-03-03T22:10:00'),
    author: 'Zhukova Katerina',
    photoLink: 'https://pp.userapi.com/c824602/v824602444/bdfb9/YJEPgL7x_U8.jpg',
	hashTags: ['#Fun', '#Studing' ],
    likes: ['Jane Ketko', 'Egor']
   },

   {
	id: '3',
    description: 'Отмечаем вечер встречи',
    createdAt: new Date('2018-02-05T13:20:00'),
    author: 'Alex Manchuk',
    photoLink: 'https://pp.userapi.com/c830401/v830401522/51868/07S71jd-amM.jpg',
	hashTags: ['#fun', '#classmates'],
    likes: ['Jane Ketko', 'Egor', 'Alex Lakiza']
   },
   
   {
	id: '4',
    description: 'Новые кроссы',
    createdAt: new Date('2018-02-03T20:16:00'),
    author: 'Dima',
    photoLink: 'https://pp.userapi.com/c840122/v840122370/5861e/hWRZv3ky1EI.jpg',
	hashTags: ['#Nike', '#Adidas'],
    likes: ['Egor', 'Lesha']
   },
   
   {
	id: '5',
    description: 'Когда у тебя есть сестра',
    createdAt: new Date('2018-02-01T23:23:00'),
    author: 'Jane Ketko',
    photoLink: 'https://pp.userapi.com/c621703/v621703740/388fa/5QZOAXv0mm8.jpg',
	hashTags: ['#sister'],
    likes: ['Lesha', 'Egor']
   },
   
   {
	id: '6',
    description: 'Когда начинаешь делать УП в воскресенье вечером',
    createdAt: new Date('2018-01-25T16:00:00'),
    author: 'Lesha',
    photoLink: 'https://pp.userapi.com/c824502/v824502318/3706b/6vgp-WfWeYo.jpg',
	hashTags: ['#UP', '#deadline'],
    likes: ['Egor', 'Alex Lakiza']
   },
   
   {
	id: '7',
    description: 'Папа дал ключи от бара, гуляем))',
    createdAt: new Date('2018-01-10T19:21:00'),
    author: 'Alex Manchuk',
    photoLink: 'https://pp.userapi.com/c841224/v841224583/14a6f/AiJB9nob4FE.jpg',
	hashTags: ['#bar', '#friends'],
    likes: ['Jane Ketko']
   },
   
   {
	id: '8',
    description: 'Любимая школа! Как приятно снова туда вернуться!',
    createdAt: new Date('2018-01-05T12:23:00'),
    author: 'Jane Ketko',
    photoLink: 'https://pp.userapi.com/c824600/v824600321/96153/csKK6BuBO_Q.jpg',
	hashTags: ['#school', '#friends'],
    likes: ['Angelina', 'Alex Manchuk']
   },
   
   {
	id: '9',
    description: 'Нашли старую фотку',
    createdAt: new Date('2017-10-23T18:34:00'),
    author: 'Alex Manchuk',
    photoLink: 'https://pp.userapi.com/c834400/v834400379/820ad/C7bK5Tvu_90.jpg',
	hashTags: ['#friends'],
    likes: ['Jane Ketko', 'Angelina']
   },
   
   {
	id: '10',
    description: 'Эта прелесть у меня!!!',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Jane Ketko',
    photoLink: 'https://pp.userapi.com/c840423/v840423066/3b371/DbIcov2sjic.jpg',
	hashTags: ['#comics', '#gift'],
    likes: ['Maks', 'Angelina']
   },
   
   {
    id: '11',
    description: 'Всем привет! Хорошего настроения!',
    createdAt: new Date('2017-03-03T23:11:00'),
    author: 'Jane Ketko',
    photoLink: 'https://pp.userapi.com/c824603/v824603201/97abb/0rfsB5TNa_c.jpg',
	hashTags: ['#GoodLuck', '#Hello'],
    likes: ['Zhukova Katerina']
   },

   {
	id: '12',
    description: 'Веселая учеба:)',
    createdAt: new Date('2017-03-03T22:10:00'),
    author: 'Zhukova Katerina',
    photoLink: 'https://pp.userapi.com/c824602/v824602444/bdfb9/YJEPgL7x_U8.jpg',
	hashTags: ['#Fun', '#Studing' ],
    likes: ['Jane Ketko', 'Egor']
   },

   {
	id: '13',
    description: 'Отмечаем вечер встречи',
    createdAt: new Date('2017-02-05T13:20:00'),
    author: 'Alex Manchuk',
    photoLink: 'https://pp.userapi.com/c830401/v830401522/51868/07S71jd-amM.jpg',
	hashTags: ['#fun', '#classmates'],
    likes: ['Jane Ketko', 'Egor', 'Alex Lakiza']
   },
   
   {
	id: '14',
    description: 'Новые кроссы',
    createdAt: new Date('2017-02-03T20:16:00'),
    author: 'Dima',
    photoLink: 'https://pp.userapi.com/c840122/v840122370/5861e/hWRZv3ky1EI.jpg',
	hashTags: ['#Nike', '#Adidas'],
    likes: ['Egor', 'Lesha']
   },
   
   {
	id: '15',
    description: 'Когда оставила телефон без присмотра, а у тебя есть сестра',
    createdAt: new Date('2017-02-01T23:23:00'),
    author: 'Jane Ketko',
    photoLink: 'https://pp.userapi.com/c621703/v621703740/388fa/5QZOAXv0mm8.jpg',
	hashTags: ['#sister'],
    likes: ['Lesha', 'Egor']
   },
   
   {
	id: '16',
    description: 'Когда весь курс начинает делать УП в воскресенье вечером',
    createdAt: new Date('2017-01-25T16:00:00'),
    author: 'Lesha',
    photoLink: 'https://pp.userapi.com/c824502/v824502318/3706b/6vgp-WfWeYo.jpg',
	hashTags: ['#UP', '#deadline'],
    likes: ['Egor', 'Alex Lakiza']
   },
   
   {
	id: '17',
    description: 'Папа дал ключи от бара, гуляем))',
    createdAt: new Date('2017-01-10T19:21:00'),
    author: 'Alex Manchuk',
    photoLink: 'https://pp.userapi.com/c841224/v841224583/14a6f/AiJB9nob4FE.jpg',
	hashTags: ['#bar', '#friends'],
    likes: ['Jane Ketko']
   },
   
   {
	id: '18',
    description: 'Любимая школа! Как приятно снова туда вернуться!',
    createdAt: new Date('2017-01-05T12:23:00'),
    author: 'Jane Ketko',
    photoLink: 'https://pp.userapi.com/c824600/v824600321/96153/csKK6BuBO_Q.jpg',
	hashTags: ['#school', '#friends'],
    likes: ['Angelina', 'Alex Manchuk']
   },
   
   {
	id: '19',
    description: 'Нашли старую фотку',
    createdAt: new Date('2016-10-23T18:34:00'),
    author: 'Alex Manchuk',
    photoLink: 'https://pp.userapi.com/c834400/v834400379/820ad/C7bK5Tvu_90.jpg',
	hashTags: ['#friends'],
    likes: ['Jane Ketko', 'Angelina']
   },
   
   {
	id: '20',
    description: 'Эта прелесть у меня!!!',
    createdAt: new Date('2017-02-23T23:00:00'),
    author: 'Jane Ketko',
    photoLink: 'https://pp.userapi.com/c840423/v840423066/3b371/DbIcov2sjic.jpg',
	hashTags: ['#comics', '#gift'],
    likes: ['Maks', 'Angelina']
   }
]

var methods = (function() {
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

let filterConfig = undefined;
//this "for" allows photoPosts to use methods from module "methods"
for (method in methods) {
    photoPosts.__proto__[method] = methods[method];
}

//VERIFICATION OF ALL METHODS
/*console.log('___________VERIFICATION OF ALL METHODS_____________');
console.log('\n1.getPhotoPosts:\n');
console.log('\ninvalid arguments: ', photoPosts.getPhotoPosts('akjsnjx','ajsnja'));
console.log('\ndefault arguments: ', photoPosts.getPhotoPosts());
console.log('\nskip = 3, top = 10(default): ', photoPosts.getPhotoPosts(3));
console.log('\nskip = 4, top = 4 : ', photoPosts.getPhotoPosts(4, 4));
console.log('\nfiltering according to date: ', photoPosts.getPhotoPosts(0, 10,{date: new Date('2017-01-25T16:00:00')}));
console.log('\nwe choose posts of Alex Manchuk: ', photoPosts.getPhotoPosts(0,3,{author: 'Alex Manchuk'}));

console.log('\n2.getPhotoPost:\n');
console.log('invalid argument: ', photoPosts.getPhotoPost(''));
console.log('\nthere isnot post with id=100: ', photoPosts.getPhotoPost('100'));
console.log('\nid = 3: ', photoPosts.getPhotoPost('3'));

console.log('\n3.validatePhotoPost:\n');
console.log("Normal post:", photoPosts.validatePhotoPost({
    id: '10',
    description: 'Эта прелесть у меня!!!',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Jane Ketko',
    photoLink: 'https://pp.userapi.com/c840423/v840423066/3b371/DbIcov2sjic.jpg',
	hashTags: ['#comics', '#gift'],
    likes: ['Maks', 'Angelina']
}));
console.log("\npost with invalid arguments:", photoPosts.validatePhotoPost({
    id: '10',
    description: 'Эта прелесть у меня!!!',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Jane Ketko',
    photoLink: 123,
	hashTags: ['#comics', '#gift'],
    likes: ['Maks', 'Angelina']
}));

console.log('\n4.addPhotoPost:\n');
console.log('add post with mistakes: ', photoPosts.addPhotoPost({
	id: "21",
    description: 'Всем привет',
    createdAt: new Date('2017-03-05T01:46:00'),
    author: 123,
    photoLink: 'https://pp.userapi.com/c824600/v824600321/96153/csKK6BuBO_Q.jpg',
    hashTags: ['#hello'],
    likes: ['Maks']
}));
console.log('\nadd valid post: ', photoPosts.addPhotoPost({
	id: "21",
    description: 'Всем привет',
    createdAt: new Date('2017-03-05T01:46:00'),
    author: 'Jane Ketko',
    photoLink: 'https://pp.userapi.com/c824600/v824600321/96153/csKK6BuBO_Q.jpg',
    hashTags: ['#hello'],
    likes: ['Maks']
}));
console.log("\nall posts:", photoPosts);//verification

console.log('\n5.editPhotoPost:\n');
console.log('show post #1 before edition: ', photoPosts.getPhotoPost('1'));
console.log('\nedition of post #1: ', photoPosts.editPhotoPost('1', {
	description: "Всем привет! Я изменила этот пост!"
}));
console.log('\nshow post #1 after edition: ', photoPosts.getPhotoPost('1'));
console.log('\nedition post #1 with invalid arguments: ', photoPosts.getPhotoPost('', 123));

console.log('\n6.removePhotoPost:\n');
console.log('remove post #5: ', photoPosts.removePhotoPost('5'));
console.log('\nverification: ', photoPosts.getPhotoPost('5'));
console.log("\nall posts:", photoPosts);
console.log("\nremove with invalid arguments: ", photoPosts.removePhotoPost(''));*/