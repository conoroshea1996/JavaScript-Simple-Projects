const quotes = [
    {
    name:'Steve Jobs',
    quote:"Stay Hungry. Stay Foolish."
    },
    {
    name:'Pablo Picasso',
    quote:'Good Artists Copy, Great Artists Steal.'
    },
    {
    name:'Paul Graham',
    quote:'Argue with idiots, and you become an idiot.'
    },
    {
    name:'Oscar Wilde',
    quote:'Be yourself; everyone else is already taken.'
    },
    {
    name: 'Leonardo Da Vinci',
    quote:'Simplicity is the ultimate sophistication.'
    },
    {
    name:'Brian Tracy',
    quote:'Move Out Of Your Comfort Zone. You Can Only Grow If You Are Willing To Feel Awkward And Uncomfortable When You Try Something New.'
    },
    {
    name:'Bill Gates',
    quote:'It’s fine to celebrate success but it is more important to heed the lessons of failure.'
    }
  ];

  const button = document.querySelector('.btn');
  const quoteDisplay = document.querySelector('.quote');
  const Author = document.querySelector('.quoteAuthor');

  button.addEventListener('click',QuoteGen)

  function QuoteGen() {
      let random = Math.floor(Math.random()*quotes.length);
      Author.innerHTML = quotes[random].name;
      quoteDisplay.innerHTML = quotes[random].quote;
    
      
  }