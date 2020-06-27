const express = require("express")
require("./db")
const estudiante = require("./modelo")

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/estudiantes", async (req, res) => {
    let estudiantes = await estudiante.find({})
    res.json(estudiantes)
})

app.post("/estudiantes", async (req, res) => {

    await estudiante.create({
        "nombre": req.body.nombre,
        "apellido": req.body.apellido,
        "id": req.body.id
    })

    res.send("Guardado")
})

app.get('/estudiantes/:id', async (req, res) => {
    let estudiantes = await estudiante.findOne({id:req.params.id})
    if (estudiantes) {
        res.json(estudiantes)
    } else {
        res.send("ingrese id valido")
    }
})

app.put("/estudiantes/:id", async (req, res) => {

    let estudiantes = await estudiante.findOne({id:req.params.id})

    if (estudiantes) {

        await estudiantes.updateOne({
            "nombre":req.body.nombre,
            "apellido":req.body.apellido
        })

        res.send("editado")
    } else {
        res.send("ingrese id valido")
    }
})

app.delete("/estudiantes/:id", async(req, res) => {

    let estudiantes = await estudiante.findOneAndDelete({id:req.params.id})

    if (estudiantes) {
        res.send("borrado")
    } else {
        res.send("ingrese id valido")
    }
})

app.listen(3000, () => {
    console.log("ejecutandose en puerto 3000");
})