import mongoose from "mongoose"



export const dataBase = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017", {
            dbName: "emailCheckerofuser"
        })
        console.log("Database connected successfully")
    } catch (error) {
        console.log('error:', error)

    }
}