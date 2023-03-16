import mongoose from "mongoose"


const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
})

const Cards = mongoose.model("Cards", cardSchema)
export default Cards;