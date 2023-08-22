const quotes = [
"Your time is limited so don't waste it living someone else's life",
"We become what we think about",
"If the wind will not serve, take to the oars",
"Dream big and dare to fail",
"You can never cross the ocean until you have the courage to lose sight of the shore",
"It's not the years in your life that count. It's the life in your years",
"Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it",
"It is never too late to be what you might have been",
"Life is what we make it, always has been, always will be",
"In order to succeed, your desire for success should be greater than your fear of failure",
"You may be disappointed if you fail, but you're doomed if you don't try",
"There is only one way to avoid criticism: do nothing, say nothing, and be nothing",
"Do what you can, where you are, with what you have",
"Remember that not getting what you want is sometimes a wonderful stroke of luck",
"Everything you have ever wanted is on the other side of fear",
"The best revenge is massive success",
"Life isn't about getting and having, it's about giving and being",
"You become what you believe",
"Our lives begin to end the day we become silent about things that matter",
"The only person you are destined to become is the person you've decided to be",
"It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful himan beings",
"Certain things catch your eye, but pursue only those that capture the heart",
"Life is what happens to you while you're busy making other plans",
"Limitations live only in our minds. But if we use our imagination our possibilities become limitless",
"Life shrinks or expands in proportion to ones courage",
"If you do what you've always done, you'll get what you've always gotten",
"Either run you day or the day runs you"
];

const authors = [
"- Steve Jobs",
"- Earl Nightingale",
"- Latin Proverb",
"- Norman Vaughan",
"- Christopher Columbus",
"- Abraham Lincoln",
"- Johann Wolfgang van Goethe",
"- George Eliot",
"- Grandma Moses",
"- Bill Cosby",
"- Beverly Sills",
"- Aris tottle",
"- Teddy Roosevelt",
"- Dalai Lama",
"- George Addair",
"- Frank Sinatra",
"- Kevin Kruse",
"- Oprah Winfrey",
"- Martin Luther King Jr",
"- Ralph Waldo Emerson",
"- Ann Landers",
"- Ancient Indian Proverb",
"- John Lennon",
"- Jami Paolinetti",
"- Anonymous",
"- Jony Robbins",
"- Jim Rohn"
];

const colors = [
'#6accbc',
'#158fad',
'#ccac93',
'#ff8d85',
'#bb255f',
'#ec42c8',
'#53af8b',
'#95dfe3',
'#987d84',
'#008080',
'#fff384',
'#665a72',
'#e3adb5',
'#ea48fb',
'#990c00',
'black',
'orangered',
'orange',
'red',
'green',
'navy',
'yellow',
'violet',
'purple',
'brown',
'golden',
'linen',
'pink'
];

document.getElementById('text').innerHTML = quotes[0];
document.getElementById('author').innerHTML = authors[0];
document.body.style.backgroundColor = colors[0];
document.getElementById('text').style.color = colors[0];
document.getElementById('author').style.color = colors[0];
document.getElementById('new-quote').style.backgroundColor = colors[0];
document.getElementById('tweet-quote').style.backgroundColor = colors[0];
document.getElementById('t-quote').style.backgroundColor = colors[0];

function newQuote(){
  var randomNum = Math.floor(Math.random() * quotes.length);
  document.getElementById('text').innerHTML = quotes[randomNum];
  document.getElementById('author').innerHTML = authors[randomNum];
  document.body.style.backgroundColor = colors[randomNum];
  document.getElementById('text').style.color = colors[randomNum];
  document.getElementById('author').style.color = colors[randomNum];
  document.getElementById('new-quote').style.backgroundColor = colors[randomNum];
  document.getElementById('tweet-quote').style.backgroundColor = colors[randomNum];
  document.getElementById('t-quote').style.backgroundColor = colors[randomNum];
  
}