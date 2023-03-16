

const quoteGenerator = {
    arrayName :[],
    arrayQuote : [],
    randomGeneration : null, 
    logQuotation(){
        this.randomGeneration = Math.floor(Math.random()*this.arrayQuote.length);
        console.log("Your Daily quote is :");
        console.log(this.arrayQuote[this.randomGeneration]);
        console.log(`from ${this.arrayName[this.randomGeneration]}`)
        console.log('***************************')
    } ,
    addQuote (author, quote) {
        this.arrayName.push(author)
        this.arrayQuote.push(quote)
  
    },    
};


quoteGenerator.addQuote ('Steve Jobs', 'Your time is limited, so don’t waste it living someone else’s life.');
quoteGenerator.addQuote ('Elon Musk', "If other people are putting in 40 hour workweeks and you're putting in 100 hour workweeks, then even if you're doing the same thing … you will achieve in four months what it takes them a year to achieve.")

let thisIsYourQuote = quoteGenerator.logQuotation();


//create de fonction that will determine how many pushup i have to do depending on the day
const today = new Date();

const howManyPushups = () => {
    const today = new Date();
    const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });
    switch (dayOfWeek) {
        case 'Monday': 
            console.log ('We are Monday, you gotta do 3 series of 20 pushups.');
            break;
        case 'Tuesday':
            console.log ('We are Tuesday, you gotta do 4 series of 15 pushups.');
            break;
        case 'Wednesday':
            console.log ('We are Wednesday, you gotta do 4 series of 15 pushups.');
            break;  
        case 'Thursday':
            console.log ('We are Thursday, you can rest.');
            break;
        case 'Thursday':
            console.log ('We are Friday, you gotta do 3 series of 20 pushups.');
            break;  
        default:
            console.log("It's the week end, you can rest.");          
    }
} 


// generate one random interrogation word (why, what, would', have,) + one random word 

//import de la bibliothèque axios pour faire des requetes Http
const axios = require('axios')

const apiUrl= 'https://random-word-api.herokuapp.com/word?number=1';

 const interrogativePronouns = [
    'Who',
    'Whom',
    'Whose',
    'What',
    'Which',
    'Where',
    'When',
    'Why',
    'How'
  ];


  const negativeAuxiliaryVerbs = [
    "don't",
    "doesn't",
    "didn't",
    "haven't",
    "hasn't",
    "hadn't",
    "can't",
    "couldn't",
    "shouldn't",
    "won't",
    "wouldn't",
    "mightn't",
    "mustn't",
  ];


const generateRandomPhrase = {
    async generateRandomWord  () {
        try {
            const response = await axios.get(apiUrl);
            const word = response.data[0];
            return word;
        } catch (error) {
            console.error(error);
        }
    },
    async generatedPhrases () {
        const pronounOne = interrogativePronouns[Math.floor(Math.random()*interrogativePronouns.length)];
        const pronounTwo = interrogativePronouns[Math.floor(Math.random()*interrogativePronouns.length)];
        const negativeAuxOne = negativeAuxiliaryVerbs[Math.floor(Math.random()*negativeAuxiliaryVerbs.length)];
        const negativeAuxtwo = negativeAuxiliaryVerbs[Math.floor(Math.random()*negativeAuxiliaryVerbs.length)];
        const randomWord = await this.generateRandomWord();
        console.log (`use the word '${randomWord}' with '${pronounOne}' and '${pronounTwo}', and with '${negativeAuxOne}' and '${negativeAuxtwo}`);

    }
    
}

howManyPushups();
thisIsYourQuote;
console.log('***************************');
generateRandomPhrase.generatedPhrases();




