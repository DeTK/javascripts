const sleep = (function () {
    const time = function (sec = 1) { return new Promise((resolve, reject) => { setTimeout(() => { resolve() }, sec) }) };
    const element = async function (query, sec = 1) { while (!document.querySelector(query)) { await time(sec); } };
    return { Time: time, Element: element };
})();
