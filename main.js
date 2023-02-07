function preload(){

}



function setup(){
    canvas = createCanvas(600,500)
    canvas.position(450,100)
    webcam = createCapture(VIDEO)
    webcam.hide()
}




function draw(){
    image(webcam,200,150,200,200)
     
    fill("red")
    circle(70,70,80)
    circle(530,70,80)
    circle(70,430,80)
    circle(530,430,80)

    fill("green")
    rect(110,55,380,25)
    rect(110,415,380,25)
    rect(60,110,25,280)
    rect(520,110,25,280)



}

function take_snapshot(){
    save("editedimage.png")
}












