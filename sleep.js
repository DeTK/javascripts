function sleep ()
{
    const self =
    {
        time : (sec = 0) => new Promise((resolve, reject)=>{setTimeout(()=>{resolve();}, sec);}).then()
    }
    return self;
}
