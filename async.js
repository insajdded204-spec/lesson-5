//Задание 1
const sleep = (ms)=> {
    setTimeout(() => {
        console.log(1);
    }, 1000);

    Promise.resolve().then(() => {
        console.log(2);
    });
}
sleep(1000)


//Задание 2
const cookDinner = async () => {
    console.log("🕒Включаю плиту...");
    await(1000);
    console.log("🔪Режу овощи...");
    await(2000);
    console.log("🍲Варю суп...");
    await(3000);
    console.log("✅️Ужин готов!");
}


//Задание 3
const TryCookDinner= async () => {
    try{
        const isGasOn = true;
        if (!isGasOn) throw new Error("Нет газа");
        console.log("🕒Включаю плиту...");
        await(1000);
        console.log("🔪Режу овощи...");
        await(2000);
        console.log("🍲Варю суп...");
        await(3000);
        console.log("✅️Ужин готов!");
    } catch (err){
        console.log("❌Ошибка:", err.message)
    }
};
TryCookDinner()