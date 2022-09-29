const express = require('express')
const app = express()
const studentArray = require("./InitialData")
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.get("/api/student", async (req, res) => {
    try {
        const data = await studentArray
        res.json({
            status: "sucess",
            data
        })
    }
    catch (e) {
        res.status(400).json({
            status: "failure",
            message: e.message
        })
    }
})

app.get("/api/student/:id", (req, res) => {
    try {
        const idx = studentArray.findIndex((ele) => ele.id == req.params.id)
        if (idx == -1) {
            res.status(404).json({
                status: "failure",
                message: "No student Exist"
            })
        }

        res.json({
            data: studentArray[idx]
        })
    }
    catch (e) {
        res.status(400).json({
            status: "failure",
            message: e.message
        })
    }
})

// Add new data---------------------------------------
let lastId = studentArray.length;
app.post("/api/student", async (req, res) => {
    try {
        if (req.body.name && req.body.currentClass && req.body.division) {
            studentArray.push({
                id: lastId + 1,
                name: req.body.name,
                currentClass: req.body.currentClass,
                division: req.body.division
            })
            res.json({
                status: "sucessfull",
                id: lastId + 1
            })
            lastId++
        }
        else {
            res.status(400).json({
                status: "fail",
                message: "Incomplete data"
            })
        }
    }
    catch (e) {
        res.status(400).json({
            status: "failure",
            message: e.message
        })
    }
})

//update data----------------------------------------
app.put("/api/student/:id", async (req, res) => {
    try {
        if (req.params.id != -1) {
            const idx = studentArray.findIndex((ele) => ele.id == req.params.id)

            if (req.body.name && req.body.currentClass && req.body.division) {
                    studentArray[idx].name = req.body.name,
                    studentArray[idx].currentClass = req.body.currentClass,
                    studentArray[idx].division = req.body.division
                    
                    res.json({
                        message:"Update sucessfully!"
                    })
            }
        
             else {
                res.status(400).json({
                status: "fail",
                message: "Incomplete data"
                })
             }
        }
        else {
        res.json({
            status: "fail",
            message: "invaid id"
        })
    }
}
    catch (e) {
        res.status(400).json({
        status: "failure",
        message: e.message
        })
    }
})

//delete data-------------------------------------------
app.delete("/api/student/:id", async (req, res) => {
    try {
        const idx = await studentArray.findIndex(ele=>ele.id==req.params.id)
        if(idx!=-1){
            studentArray.splice(idx,1)
            res.json({
                status: "sucess",
                message:"deleted sucessfully!"
            }) 
        }
        else{
            res.status(404).json({
                status:"falure",
                message:"Given id doesnot exist"
            })
        }
        
    }
    catch (e) {
        res.status(400).json({
            status: "failure",
            message: e.message
        })
    }
})
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   