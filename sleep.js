const sleep = (() => {
    const time = (delay = 1) => new Promise((resolve) => setTimeout(() => resolve(true), delay));
    const element = async (query, delay = 1) => { while (!document.querySelector(query)) { await time(delay); }};
    const expression = async (expression, delay = 1) => { await time(delay); return expression};
    const random = async (min, max) => { await time(Math.floor(Math.random() * (max - min + 1)) + min);};
    return { Time: time, Element: element, Expression: expression, Random: random }; 
})();
 
