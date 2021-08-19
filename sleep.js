const sleep = (() => {
    const time = (delay = 1) => new Promise((resolve) => setTimeout(() => resolve(true), delay));
    const element = async (query, delay = 1) => { while (!document.querySelector(query)) { await time(delay); } console.log(`> ${query}!`); };
    const expression = async (expression, delay = 1) => { while (!expression) { await time(delay); }};
    const random = async (min, max, baseTime) => { await time((Math.floor(Math.random() * (max- min + 1)) + min) * baseTime);};
    return { Time: time, Element: element, Expression: expression, Random: random }; 
})();
 
