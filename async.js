const sleep = (ms)=> {
    setTimeout(() => {
        console.log(1);
    }, 1000);

    Promise.resolve().then(() => {
        console.log(2);
    });
}
sleep(1000)