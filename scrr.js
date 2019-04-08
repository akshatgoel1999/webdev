$(() => {
    let x=$('#newtodo')
let y=$('#addtodo')
let z=$('#todolist')

y.onclick(() => {
z.append("<li>"+x.val()+"</li>")
})
})
