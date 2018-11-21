function onLoadAnimations(){
    var a = document.querySelector('#reveal');
    var b = document.querySelector('#reveal img');
    var c = document.querySelector('#reveal h1');
    var arrow = document.querySelector('#down-arrow');


    arrow.style.opacity = "1";
    if(window.innerWidth > 1024){
        arrow.style.bottom = "40px";
    }else{
        arrow.style.bottom = "70px";
    }

    a.style.width = "100vw";
    a.style.height = "100vw";
    a.style.backgroundColor = "#ecf0f100";

    b.style.opacity = "1";
    b.style.bottom = "0";
    
    c.style.opacity = "1";
    c.style.bottom = "0";
}