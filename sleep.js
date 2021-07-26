const sleep = (function () {
    const time = function (sec = 1) { return new Promise((resolve, reject) => { setTimeout(() => { console.log(`> ${sec / 1000} 초`); resolve(); }, sec) }) };
    const element = async function (query, sec = 1) { while (document.querySelector(query) == null) { await time(sec); } console.log(`> ${query}!`); };
    return { Time: time, Element: element };
})();
