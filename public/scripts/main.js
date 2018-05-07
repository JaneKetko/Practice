
let _id = 0;
class Post {
    constructor(author, createdAt, photoLink, likes, description, hashTags) {
        this.id = String(_id++);
        this.createdAt = createdAt;
        this.photoLink = photoLink;
        this.author = author;
        this.description = description;
        this.hashTags = hashTags;
        this.likes = likes;
    }
}


const Users = [
    {
        username: "janeketko",
        password: "janeketko"
    },
    {
        username: "kek",
        password: "lol"
    },
	{
        username: "mama",
        password: "mama"
    }
]

const filterConfig = {
    fromDate: "",
    toDate: "",
    author: "",
    hashTags: []
};

const photoPosts = [];

for (method in ServerModule) {
    photoPosts.__proto__[method] = ServerModule[method];
}


photoPosts.addPhotoPost(new Post('Jane Ketko', new Date(2018, 03, 03, 23, 11), 'images/1.jpg', ['Zhukova Katerina'], 'Всем привет! Хорошего настроения!', ['#GoodLuck', '#Hello']));
photoPosts.addPhotoPost(new Post('Zhukova Katerina', new Date(2018, 03, 03, 22, 10), 'images/2.jpg', ['Jane Ketko', 'Egor'], 'Веселая учеба:)', ['#Fun', '#Studing' ]));
photoPosts.addPhotoPost(new Post('Alex Manchuk', new Date(2018, 02, 05, 13, 20), 'images/3.jpg', ['Jane Ketko', 'Egor', 'Alex Lakiza'], 'Отмечаем вечер встречи', ['#fun', '#classmates']));
photoPosts.addPhotoPost(new Post('Dima', new Date(2018, 02, 03, 20, 16), 'images/4.jpg', ['Egor', 'Lesha'], 'Новые кроссы', ['#Nike', '#Adidas']));
photoPosts.addPhotoPost(new Post('Jane Ketko', new Date(2018, 02, 01, 23, 23), 'images/5.jpg', ['Egor', 'Lesha'], 'Когда у тебя есть сестра', ['#sister']));
photoPosts.addPhotoPost(new Post('Lesha', new Date(2018, 01, 25, 16, 00), 'images/6.jpg', ['Egor', 'Alex Lakiza'], 'Когда начинаешь делать УП в воскресенье вечером', ['#UP', '#deadline']));
photoPosts.addPhotoPost(new Post('Alex Manchuk', new Date(2018, 01, 10, 19, 21), 'images/7.jpg', ['Jane Ketko'], 'Папа дал ключи от бара, гуляем))', ['#bar', '#friends']));
photoPosts.addPhotoPost(new Post('Jane Ketko', new Date(2018, 01, 05, 12, 23), 'images/8.jpg', ['Angelina', 'Alex Manchuk'], 'Любимая школа! Как приятно снова туда вернуться!', ['#school', '#friends']));
photoPosts.addPhotoPost(new Post('Alex Manchuk', new Date(2017, 10, 23, 18, 34), 'images/9.jpg', ['Jane Ketko', 'Angelina'], 'Нашли старую фотку', ['#friends']));
photoPosts.addPhotoPost(new Post('Jane Ketko', new Date(2017, 02, 23, 23, 00), 'images/10.jpg', ['Maks', 'Angelina'], 'Эта прелесть у меня!!!', ['#comics', '#gift']));
photoPosts.addPhotoPost(new Post('Jane Ketko', new Date(2017, 06, 04, 23, 11), 'images/1.jpg', ['Zhukova Katerina'], 'Всем привет! Хорошего настроения!', ['#GoodLuck', '#Hello']));
photoPosts.addPhotoPost(new Post('Zhukova Katerina', new Date(2017, 03, 03, 22, 10), 'images/2.jpg', ['Jane Ketko', 'Egor'], 'Веселая учеба:)', ['#Fun', '#Studing' ]));
photoPosts.addPhotoPost(new Post('Alex Manchuk', new Date(2017, 02, 05, 13, 20), 'images/3.jpg', ['Jane Ketko', 'Egor', 'Alex Lakiza'], 'Отмечаем вечер встречи', ['#fun', '#classmates']));
photoPosts.addPhotoPost(new Post('Dima', new Date(2017, 02, 03, 20, 16), 'images/4.jpg', ['Egor', 'Lesha'], 'Новые кроссы', ['#Nike', '#Adidas']));
photoPosts.addPhotoPost(new Post('Jane Ketko', new Date(2016, 02, 01, 23, 23), 'images/5.jpg', ['Egor', 'Lesha'], 'Когда у тебя есть сестра', ['#sister']));
photoPosts.addPhotoPost(new Post('Lesha', new Date(2016, 01, 25, 16, 00), 'images/6.jpg', ['Egor', 'Alex Lakiza'], 'Когда начинаешь делать УП в воскресенье вечером', ['#UP', '#deadline']));
photoPosts.addPhotoPost(new Post('Alex Manchuk', new Date(2017, 01, 10, 19, 21), 'images/7.jpg', ['Jane Ketko'], 'Папа дал ключи от бара, гуляем))', ['#bar', '#friends']));
photoPosts.addPhotoPost(new Post('Jane Ketko', new Date(2016, 01, 05, 12, 23), 'images/8.jpg', ['Angelina', 'Alex Manchuk'], 'Любимая школа! Как приятно снова туда вернуться!', ['#school', '#friends']));
photoPosts.addPhotoPost(new Post('Alex Manchuk', new Date(2016, 10, 23, 18, 34), 'images/9.jpg', ['Jane Ketko', 'Angelina'], 'Нашли старую фотку', ['#friends']));
photoPosts.addPhotoPost(new Post('Jane Ketko', new Date(2017, 02, 23, 23, 00), 'images/10.jpg', ['Maks', 'Angelina'], 'Эта прелесть у меня!!!', ['#comics', '#gift']));


console.log(JSON.stringify(photoPosts));
if (!localStorage.users) localStorage.users = JSON.stringify(Users);
if (!localStorage.photoPosts) localStorage.photoPosts = JSON.stringify(photoPosts);
if (!localStorage.state) localStorage.state = "1";
if (_id) _id = JSON.parse(localStorage.photoPosts).length + 1;



function display() {

    switch (localStorage.state) {

        case "1": {
            DisplayLogIn();
            break;
        }

        case "2": {
            DisplayFeed();
            displayPosts();
            dom.displayUserInfo(localStorage.user);
            break;
        }

        case "3": {
            DisplayAddForm();
            break;
        }
    }
}


display();


