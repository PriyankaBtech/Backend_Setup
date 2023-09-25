import app from './app.js'

const port = 3003

// database connection -> mongodb
// import mongoose from 'mongoose';
// mongoose.connect('mongodb://127.0.0.1:27017/test');  // unprofessional approch

// professional apporch
// - Database may fail
// - Database continent

(async () => {
    try {
        // db connection
        await mongoose.connect('dbstring') // .env, dotenv
        console.log("Database connected successfully")
        
        // for application | express
        app.on("error", (err) => {
            console.log("ERROR: ", err)
            throw err
        })

        const onListening = () => {
            console.log(`Listing on port ${port}`)
        }

        app.listen(port, onListening)

        
    } catch (error) {
        console.log("Error :", error)
        throw error        
    }
})()


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })