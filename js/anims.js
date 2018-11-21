function onLoadAnimations(){
    var a = document.querySelectorAll('#reveal');
    var b = document.querySelectorAll('#reveal img');
    var c = document.querySelectorAll('#reveal h1');
    var arrow = document.querySelectorAll('#down-arrow');

    if(arrow.length > 0){
        for(var i = 0; i < arrow.length; i++){
            arrow[i].style.opacity = "1";
            if(window.innerWidth > 1024){
                arrow[i].style.bottom = "40px";
            }else{
                arrow[i].style.bottom = "10vh";
            }
        }
    }

    if(a.length > 0){
        for(var i = 0; i < a.length; i++){
            a.style.width = "100vw";
            a.style.height = "100vw";
            a.style.backgroundColor = "#ecf0f100";
        }
    }

    if(b.length > 0){
        for(var i = 0; i < b.length; i++){
            b.style.opacity = "1";
            b.style.bottom = "0";
        }
    }
    
    if(c.length > 0){
        for(var i = 0; i < c.length; i++){
            c.style.opacity = "1";
            c.style.bottom = "0";
        }
    }

}