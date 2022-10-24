const togglerBtn = document.getElementById(`tgBtn`)
const togglerBody = document.getElementById(`tgBody`)
let darkMode = false


togglerBtn.onclick= ()=>{
    if(!darkMode){
    togglerBtn.style.marginLeft = `50px`
    togglerBtn.style.marginRight = `0px`
    document.body.style.background=`rgba(230, 185, 62, 0.986)`
    togglerBody.style.background = 'rgb(7, 196, 253)'
    togglerBtn.style.rotate = '190deg'
    darkMode = true
}else if (darkMode){
    togglerBtn.style.marginLeft = `0px`
    togglerBtn.style.marginRight = `50px`
    document.body.style.background="rgba(0, 0, 0, .2)"
    togglerBody.style.background = 'gray'
    togglerBtn.style.rotate = '0deg'
    darkMode = false
}
}