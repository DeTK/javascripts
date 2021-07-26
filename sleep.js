const sleep = (function () {
    const time = function (sec = 1) { return new Promise((resolve, reject) => { setTimeout(() => { resolve() }, sec) }) };
    const element = async function (ele, sec = 1) { while (ele) { await time(sec); } };
    return { Time: time, Element: element };
})();
