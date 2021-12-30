function handleEvents() {
    // console.log(mouseX, mouseY)
    if (button1.in(mouseX, mouseY) && page2) {
        if (animation) {
            noLoop()
            button1.icon = play;
            button1.draw()
            animation = false;
            touch = true;
        }
        else {
            loop()
            button1.icon = pause;
            button1.draw()
            animation = true;
            touch = false;
        }
    }
    

    if (button4.in(mouseX, mouseY) && page2){
        page3 = true;
        page2 = false;
        magFac2.initialise();
    }

    if (button5.in(mouseX,mouseY)&& page3){
        page2= true;
        page3 = false;
    }
}
