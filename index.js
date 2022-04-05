const express=require('express');
const cors=require('cors')
const app=express()
const PORT= 5000
const mongoose=require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb+srv://cspl:cspl1307@cluster0.lbj8q.mongodb.net/CSPLDATA?retryWrites=true&w=majority').then(()=>console.log('mongodb is connected'));
//built-in middleware
app.use(express.json())
app.use(cors())
//user routes
app.use( require("./routes/auth.js"))
app.use(require("./routes/authmovie.js"))
app.use(require("./routes/authmovieget.js"))
app.use(require("./routes/authmovielatest.js"))
app.use(require("./routes/authmovielatestget.js"))
app.use(require("./routes/authfavorite.js"))
app.use(require("./routes/authfavoriteget.js"))

app.listen(PORT,()=>console.log("server is started"))
