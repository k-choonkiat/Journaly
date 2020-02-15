const express= require('express');
const cors= require('cors');
const mongoose= require('mongoose');
require('dotenv').config({path: './config/.env'});

const app= express();

app.use(cors());
app.use(express.json());

const uri= process.env.ATLAS_URI;

//to fix deprecation warning
mongoose.set('useFindAndModify', false);
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection= mongoose.connection;

connection.once('open', ()=> {
  console.log('MongoDB database connection established successfully');
})

// app.use(passport.initialize()); //passport middleware; allows the use of passport; required
// require('./config/passport.js')(passport); //passport.js returns another function and then that returned function is called immediately.

//Routes
// const usersRouter= require('./routes/api/users.js');
// const recipesRouter= require('./routes/api/recipeList.js');

// app.use('/users', usersRouter);
// app.use('/recipes', recipesRouter);

const port= process.env.PORT || 5000;

app.listen(port,()=> {
  console.log(`Server is running on port ${port}`);
});