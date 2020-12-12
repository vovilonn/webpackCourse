export default class Post {
    constructor(title, img) {
        this.title;
        this.date = new Date();
        this.img = img;
    }

    toString() {
        JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
            img: this.img,
        });
    }

    get upeprcaseTitle() {
        return this.title.toUpperCase();
    }
}
