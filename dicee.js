let variable1=Math.floor(Math.random()*6)+1;
let variable2=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+variable1+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+variable2+".png");
if(variable1>variable2){
    document.querySelector("h1").textContent="player1 is winner";
}else if(variable1<variable2){
    document.querySelector("h1").textContent="player2 is winner";
}else{
    document.querySelector("h1").textContent="Draw";
}
//以下做法非常愚蠢，应该想到利用字符串的拼接性to creat this html

// if(variable1===1){
//     document.querySelector("img.img1").setAttribute("src","images/dice1.png")
// }else if(variable1===2){
//     document.querySelector("img.img1").setAttribute("src","images/dice2.png")
// }else if(variable1===3){
//     document.querySelector("img.img1").setAttribute("src","images/dice3.png")
// }else if(variable1===4){
//     document.querySelector("img.img1").setAttribute("src","images/dice4.png")
// }else if(variable1===5){
//     document.querySelector("img.img1").setAttribute("src","images/dice5.png")
// }else if(variable1===6){
//     document.querySelector("img.img1").setAttribute("src","images/dice6.png")
// }
// if(variable2===1){
//     document.querySelector("img.img2").setAttribute("src","images/dice1.png")
// }else if(variable2===2){
//     document.querySelector("img.img2").setAttribute("src","images/dice2.png")
// }else if(variable2===3){
//     document.querySelector("img.img2").setAttribute("src","images/dice3.png")
// }else if(variable2===4){
//     document.querySelector("img.img2").setAttribute("src","images/dice4.png")
// }else if(variable2===5){
//     document.querySelector("img.img2").setAttribute("src","images/dice5.png")
// }else if(variable2===6){
//     document.querySelector("img.img2").setAttribute("src","images/dice6.png")
// }