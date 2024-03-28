const btn = document.querySelector(".button");
const quote = document.querySelector(".quote")
const person = document.querySelector(".person")

const quotes = [
  {
    quote: '"Be yourself; everyone else is already taken"',
    person: 'Oscar Wilde'
  },
  {
    quote: '"Do not go where the path may lead, go instead where there is no path and leave a trail"',
    person: 'Ralph Waldo Emerson'
  },
  {
    quote: '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."',
    person: 'Helen Keller'
  },
  {
    quote: '"Well done is better than well said"',
    person: 'Benjamin Franklin'
  },
  {
    quote: '"Do one thing every day that scares you."',
    person: 'Eleanor Roosevelt'
  },
  {
    quote: '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
    person: 'Martin Luther King Jr.'
  },
  {
    quote: '"Spread love everywhere you go. Let no one ever come to you without leaving happier"',
    person: 'Mother Teresa'
  },
  {
    quote: '"You must be the change you wish to see in the world."',
    person: 'Mahatma Gandhi'
  },
  {
    quote: '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success."',
    person: 'James Cameron'
  },
  {
    quote: '"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough."',
    person: 'Oprah Winfrey'
  },
  {
    quote: '"The future belongs to those who believe in the beauty of their dreams."',
    person: 'Eleanor Roosevelt'
  },
  {
    quote: '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking"',
    person: 'Steve Jobs'
  }
]
btn.addEventListener("click",function(){
  let random = Math.floor(Math.random()* quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})