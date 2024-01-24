import ejs from "ejs";
import express from "express";

const app = express();
const port = 3001;

let day = "";
let whatDay= "";
let adv = "";
day = new Date().getDay();
if(day == 0 || day == 6){
    whatDay = "weekend";
    adv = "enjoy your days sweetie!";
}else{
    whatDay = "weekday";
    adv = "work hard sweetie!";
}


app.get("/", (req, res) => {
  res.render("index.ejs", { myType: whatDay, advice : adv});
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});