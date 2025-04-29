import arcjet, { fixedWindow } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"], // track requests by IP address
  rules: [
    fixedWindow({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
      refillRate: 10,
      window: "3600s", // 60 second fixed window
      max: 10, // allow a maximum of 100 requests
    }),
  ],
});

export default aj;
