const app = require("express")();
const appid = process.env.APPID;

app.get("/",(req, res)=>{
    res.json({"appid": ` ${appid} home page: says hello!`});
});

app.get("/app1",(req, res)=>{
    res.json({"appid": ` ${appid} app1 page: says hello!`});
});

app.get("/app2",(req, res)=>{
    res.json({"appid": ` ${appid} app2 page: says hello!`});
});


app.get("/admin",(req, res)=>{
    res.json({"appid": ` ${appid} ADMIN page: says hello!`});
});


app.listen(appid, ()=> console.log(`${appid} is listening on ${appid}`));