//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.

// I will have two classes, Actor and Movie. The Actor class will take actors and characters they have played. It will have a method called addActor


class Movie {
    constructor(title){
        this.title = title;
        this.movies = []
    }

    addMovie(title) {
        this.movies.push(title)
    }  

}

class Menu {
    constructor() {
        this.selected = null;
    }

    start() {
        let selection = this.showMenuSelections(); 
            while(selection != 0) {
                switch (selection) {
                    case '1':
                        this.addMovie();
                        break;

                    case '2':
                        this.viewMovies();
                        break;

                    case '3':
                        this.deleteMovie();
                        break;
                    default: selection = 0
                }
                selection = this.showMenuSelections()
            }
    }

    showMenuSelections() {
           return prompt `
           0) exit
           1) add movie
           2) view movies
           3) delete movie
           `
         }

    addMovie() {
        let title = prompt(`Enter movie title here.`)
        this.movies.push(new Movie(title))
    }

    deleteMovie() {
        let index = prompt(`Enter the index of the movie you want to delete.`);
        if(index > -1 && index < this.movies.length) {
            this.movies.splice(index,1)
        }
    }

    viewMovies() {
        let moviesString = ''
        for(let i = 0; i < this.movies.length; i++){
            moviesString += i+ ') ' + this.movies[i].name + '\n';
        }
        alert(moviesString)
    }
}

 let menu = new Menu();
 menu.start()       


        
    
