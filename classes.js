// Create a Car class or function constructor that has the following properties make, model, year, isAvailable
//The Car class or function constructor should also have a method called toggleAvailability that changes the isAvailable property to its 
//opposite value (true to false, false to true) 
class Car {
    constructor(make, model, year, isAvailable) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }

    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}

const jeep = new Car('Jeep', 'SUV', 2017, 'true')
console.log({jeep});


// Rental class
class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = new Date(rentalStartDate); 
        this.rentalEndDate = new Date(rentalEndDate); 
    }

    calculateRentalDuration() {   
        const  differenceInMilliseconds = this.rentalEndDate - this.rentalStartDate;   
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        return differenceInDays;
    }

}
const uber = new Rental ('Audi', 'Maryann', "2024-4-12", "2024-6-6")
console.log({uber});

let rentalDuration = Rental.calculateRentalDuration();

console.log("Rental duration: " + rentalDuration + " days");


//Number 2 Quiz App
class Question {
    
    constructor(text, options, correctAnswer) {
        this.text = text; 
        this.options = options; 
        this.correctAnswer = correctAnswer; 
    }

    checkAnswer(userAnswer) {

        if(userAnswer != this.correctAnswer){
            return false;
        }

        return true;
    }

}



// Quiz class
class Quiz {
    
    constructor() {
        this.questions = []; 
        this.currentQuestionIndex = 0; 
        this.score = 0; 
    }
    addQuestion(question) {
        this.questions.push(question); 
    }


    nextQuestion() {
        this.currentQuestionIndex++; 
    }


    submitAnswer(userAnswer) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
    }
    this.nextQuestion();
    }

}


const quiz = new Quiz(); 
 console.log({quiz});


quiz.addQuestion(new Question("What is the largest  bird in the world?", ["Eagle", "Owl", "Ostrich", "Parrot"], "Ostrich"));
quiz.addQuestion(new Question("What is the capital city of Uganda", ["Nairobi", "Kampala", "Dodoma", "Cape Town"], "Kampala"));


quiz.submitAnswer("Eagle"); 
quiz.submitAnswer("Kampala"); 


console.log("Score: " + quiz.score); 




