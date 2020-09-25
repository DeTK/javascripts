// ==UserScript==
// @name         쿠키
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  쿠키
// @author       You
// @connect      *
// @include      *
// @grant        unsafeWindow
// @updateURL    https://github.com/DeTK/javascripts/raw/master/Cookie.meta.js
// @downloadURL  https://github.com/DeTK/javascripts/raw/master/Cookie.user.js
// @noframes


// ==/UserScript==

(function() {
    if (unsafeWindow.myCookie instanceof Object)
    {
        return;
    }
    else
    {
        console.log(`=== myCookie 객체 적용 ===`);
        unsafeWindow.myCookie =
        {
            set : function(cName,cValue, cDay)  // 쿠키 설정
            {
                var date = new Date();
                date.setHours(24 * (cDay || (cDay = 1)));
                date.setMinutes(0);
                date.setSeconds(0);
                date.setMilliseconds(0);
                document.cookie = `${escape(cName)}=${escape(cValue)}; path=/; expires=${date.toGMTString()}`;
                console.log(`${cName} 생성`);
            },
            del : function (cName) // 쿠키 제거
            {
                document.cookie = cName + "=delete; expires=Thu, 18 Dec 2000 12:00:00 UTC; path=/";
                console.log(`${cName} 제거`);
            },
            get : function(cName) // 쿠키 가져오기
            {
                var cValue = document.cookie.match(new RegExp("(^|;)\\s*"+escape(cName)+"=([^;\\s]+)"));
                if (cValue)
                {
                    console.log(`${cName}의 값 = ${unescape(cValue[2])}`);
                }
                else
                {
                    console.log(`${cName}의 값 = 없음`);
                }
                return cValue ? unescape(cValue[2]) : "없음"
            },
            exist:function(cName) // 존재 여부
            {
                var cValue = unsafeWindow.myCookie.get(cName);
                return !!cValue && "" !== cValue.toString()
            }

        }
    }
})();
