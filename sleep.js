var sleep =
{
    time:function(sec = 0)
    {
        return new Promise((resolve, reject)=>
        {
            setTimeout(()=>
            {
                resolve();
            }, sec);
        }).then();
    }
}
