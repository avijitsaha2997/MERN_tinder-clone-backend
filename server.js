import express from "express"
import mongoose from "mongoose"
import Cards from "./dbCards.js"
import Cors from "cors"

// App config
const app = express();
const port = 8001
const connection_url = "mongodb+srv://jitavisaha2997:ohS343W9egc2q9KO@cluster0.udsteis.mongodb.net/tinderAppDb?retryWrites=true&w=majority"

// Middlewares
app.use(express.json())
app.use(express())
app.use(Cors())


// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on("error", () => { console.log("Its not connected") });
db.once("open", function () {
    console.log("Connected successfully to the batabase");
});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello MERN stack bro"));

app.post("/tinder/cards", (request, res) => {
    const dbCard = request.body;

    Cards.create(dbCard)
        .then(data => {
            res.status(201).send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })
});

// ohS343W9egc2q9KO


app.get("/tinder/cards", async (request, response) => {
    const card2 = await Cards.find({});

    try {
        response.send(card2);
    } catch (error) {
        response.status(500).send(error);
    }
});



// Listener
app.listen(port, () => console.log(`App is listening: ${port}`))