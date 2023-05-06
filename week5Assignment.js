//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.

// I created a menu that lets you 0) exit, 1) add movie, 2) view movies or 3) delete movies.
// I created a class called Movie in which you could create a movie and give it a title.
// I created a Menu class in which I created the methods that will allow the menu options to function.



// This is my movie class where I can create a new Movie and give it a title

class Movie {
    constructor(argument1,argument2){
        this.title = argument1;
        //this.runtime = argument2
        //this.likes = 0
        //^^^^^^^^^^^^^^^^^^^^^^^^
        // Practice code from mentor session
    }



  //increaseLikes() {
    //this.likes += 1
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// practice code from mentor session
  }
  



// movie1.increaseLikes()
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Practice code from mentor session



// This is my Menu class where I created a Menu that will hold all of the methods that allow you to view, push or delete
// from my array.

class Menu {
    constructor() {
        this.selected = null;
        this.movies = []
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
        let userInput = prompt(`Enter movie title here.`)
        this.movies.push(new Movie(userInput))
    }

    deleteMovie() {
        let index = prompt(`Enter the index of the movie you want to delete.`);
        if(index > -1 && index < this.movies.length) {
            this.movies.splice(index,1)
            // using splice, I am taking the user input to determine where I am inserting into the array
            // and 1 to indicate how many elements I want removed.
        }
    }

    viewMovies() {
        let moviesString = ''
        for(let i = 0; i < this.movies.length; i++){
            moviesString += i+ ') ' + this.movies[i].title + '\n';
        }
        alert(moviesString)

        // I originally struggled with this method because when I would try to viewe the array of movies that I had pushed
        // the every index in the array was coming back undefined. I scheduled a mentor session for help and Chris showed me
        // that I wasn't having an issue with the addMovie method like I thought but the issue was here in viewMovies. I was 
        // not using proper dot notation to call on the title of the movie I had created.
    }
}

 let menu = new Menu();
 menu.start()       


        
    
