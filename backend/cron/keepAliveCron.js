import https from "https";
import cron from "node-cron";
const backendUrl = "https://cravekart.onrender.com/api/menu";

const startCron = () => {
  cron.schedule("*/14  * * * *", () => {
    console.log(`[${new Date().toLocaleTimeString()}] 🔄 Pinging backend...`);

    https
      .get(backendUrl, (res) => {
        if (res.statusCode === 200) {
          console.log("✅ Backend is alive.");
        } else {
          console.error(`⚠️ Response code: ${res.statusCode}`);
        }
      })
      .on("error", (err) => {
        console.error("❌ Error pinging backend:", err.message);
      });
  });

  console.log("🕒 cron job scheduled to run every 14 minutes.");
};

export default startCron;
