import Express from 'express'
import cors from 'cors'
const app = Express()
const port = 3001;

app.use(cors({
    origin: "*",
    credentials: true
}))
app.get("/", (req, res) => {
    res.send([{id: 1, name: "what"},{id: 2, name: "kim"}])
})


app.listen(port, () => console.log("your port is working!!!" + port))