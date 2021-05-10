/*class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];

    }

    get title() {
        return this._title;
    }
    get ischeckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    
    set ischeckedOut(value) {
        this._isCheckedOut = value;
    }

    toggleCheckOutStatues() {
        this.ischeckedOut = !this.ischeckedOut;
    }

    getAverageRating() {
        let ratingSum = 
        this.ratings.reduce((accumulator,rating) => accumulator + rating);
        return ratingSum / this.ratings.length;
    }
    addRating(value) {
        this.ratings.push(value);
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director;
        this._runTime;
    }

    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatues();
console.log(historyOfEverything.ischeckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatues();
console.log(speed.ischeckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());*/
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    getAverageRating() {
        let reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.ratings.reduce(reducer) / this.ratings.length;
    }

    toggleCheckedOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }

    addRating(value) {
        if (value <= 5 && value >= 1) {
            this.ratings.push(value);
        } else {
            console.log("Rating input must between 1 and 5")
        }
    }
}

class Book extends Media {

    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }

}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._movieCast = [];
    }
    get director() {
        return this._director;

    }
    get runTime() {
        return this._runTime;
    }
    get movieCast() {
        return this._movieCast;
    }

    addmovieCast(castName) {
        this.movieCast.push(castName);
    }

}

class CD extends Media {
    constructor(title, artist, year) {
        super(title);
        this._artist = artist;
        this._year = year;
        this._songs = [];
    }

    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
    get year() {
        return this._year;
    }

    addSongs(songName) {
        this.songs.push(songName);
    }

    shuffle() {
        return this.songs.sort(() => Math.random() - 0.5);
    }

}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
speed.addRating(25);
console.log(speed.getAverageRating());
speed.addRating(0.5);
console.log(speed.getAverageRating());
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed);

const hy5 = new CD('Hollywood bleeding', 'Post Malone', 2019);
hy5.toggleCheckedOutStatus();
hy5.addSongs('Circles');
hy5.addSongs('Hollywood bleeding');
hy5.addSongs('die for me');
hy5.addSongs('on the road')
console.log(hy5.songs);
console.log(hy5.shuffle());
