const sleep = (() => {
    const time = (sec = 1) => new Promise((resolve) => setTimeout(()=>{console.log(`${delay / 1000} s`), resolve()}, delay));
    const element = async (query, sec = 1) => { while (!document.querySelector(query)) { await time(sec); } console.log(`> ${query}!`); };
    const random = async (min, max, baseTime) => { await time((Math.floor(Math.random() * (max- min + 1)) + min) * baseTime);};
    return { Time: time, Element: element, Random: random };
})();
