const sleep = (function () {
    const time = function (sec = 1) { return new Promise((resolve, reject) => { setTimeout(() => { console.log(`> ${sec / 1000} 초`); resolve(); }, sec) }) };
    const element = async function (query, sec = 1) { while (!document.querySelector(query)) { await time(sec); } console.log(`> ${query}!`); };
    const random = async function (min, max, baseTime) { await time((Math.floor(Math.random() * (max- min + 1)) + min) * baseTime);};
    return { Time: time, Element: element, Random: random };
})();
