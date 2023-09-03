fetch("https://bot.bimasoft.web.id:4020/getip", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

const mantap = "asdasd";
console.log();
