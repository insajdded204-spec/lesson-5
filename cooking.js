const cookDinner = async () => {
    console.log("🕒Включаю плиту...");
    await(1000);
    console.log("🔪Режу овощи...");
    await(2000);
    console.log("🍲Варю суп...");
    await(3000);
    console.log("✅️Ужин готов!");
}
cookDinner()