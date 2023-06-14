let ans_txt, op1, op2
init = () => {
    ans_txt = document.getElementById("ans")
    op1 = document.getElementById("op1")
    op2 = document.getElementById("op2")
    plus_b = document.getElementById("plus_btn")
    minus_b = document.getElementById("minus_btn")
    mult_b = document.getElementById("mult_btn")
    div_b = document.getElementById("div_btn")

    plus_b.onclick = calc
    minus_b.onclick = calc
    mult_b.onclick = calc
    div_b.onclick = calc
}

async function calc(event){
    txt_op1 = op1.value
    txt_op2 = op2.value
    operation = event.target.innerText

    console.log(txt_op1)
    console.log(txt_op2)
    console.log(operation)
    answer = await axios({
        method: 'post',
        url: '/expressions',
        data: {
          op1: txt_op1,
          op2: txt_op2,
          option: operation
        }
    });
    console.log(answer)
    ans_txt.innerText = `Ans is: ${answer.data.ans}`
}