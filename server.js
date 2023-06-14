const express = require('express')
const cors = require('cors');

expressions = []
let count_id = 0

add_expression = (op1, op2, option) => {
    op1 = parseInt(op1)
    op2 = parseInt(op2)
    exp = {
        id: count_id,
        operand1: op1,
        operand2: op2,
        operation:option
    }
    count_id++
    let ans;
    switch(option){
        case "+": ans = op1+op2; break
        case "-": ans = op1-op2; break
        case "*": ans = op1*op2; break
        case "/": ans = op1/op2; break
    }
    exp["ans"] = ans
    expressions.push(exp)
    return ans
}

add_expression(6, 5, "+")


const app = express()
app.use(express.static('client'))

app.get('/expressions', function (req, res) {
  res.send(expressions)
})

app.get('/expressions/:id', function (req, res) {
    let id = req.params.id
    let express = expressions.find(exp => exp.id == id)
    console.log(express)

    res.send(express)
})

app.use(express.json())
app.use(cors())
app.post('/expressions', function (req, res) {

    console.log(req.body)
    let ans = add_expression(req.body.op1, req.body.op2, req.body.option)
    res.send({"ans":ans})
})

port = 3000
my_port = process.env.PORT || port
app.listen(my_port)
console.log("app is listening in port 3000")