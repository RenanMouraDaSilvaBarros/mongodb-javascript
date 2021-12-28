
const mongoose = require("mongoose")

let connection = null

class MongoDB {

    static async createConnection() {

        return mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.p26fl.mongodb.net/${process.env.DB_NAME}`).then((connectionMongoDB) => {
            console.log("mongo connected!")
            connection = connectionMongoDB
        }).catch((error) => {
            console.log(error)
        })
    }

    static async getOrCreateConnection() {

        if (!connection) {
            return mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.p26fl.mongodb.net/${process.env.DB_NAME}`).then(() => {
                console.log("mongo connected!")
            }).catch((error) => {
                console.log(error)
            })
        }
        return connection
    }

}


module.exports = MongoDB

