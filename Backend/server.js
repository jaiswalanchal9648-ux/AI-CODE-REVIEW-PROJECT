require('dotenv').config()
const app =require('./src/app')


app.listen(3000, () => {       // server running 
  console.log("server is running on http://localhost:3000");
  
})