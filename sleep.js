(function(window)
{
    window.sleep = function()
    {
        if(false === (this instanceof sleep))
        {
            return
            {
                time:function(sec=0)
                {
                    return new Promise((resolve,reject)=>
                    {
                        setTimeout(()=>
                        {
                            resolve();
                        },sec);
                    }).then();
                }
            }
        }
    }
})(window);
