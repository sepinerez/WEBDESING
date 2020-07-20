/*
window.onload = function(){
    var    W = window.innerWidth;
    var H = window.innerHeight;
    var linkGif ='https://media.giphy.com/media/89JrNrN4iOmsg/giphy.gif';
    var widthGif = 100;
    var heightGif = 100;
    var startX = 0;
    var startY = 0;
    var dircectionX = 1;
    var dircectionY = 1;
    
    function createGif(x, y, width, height, gif){
        var img = document.createElement("img");
            img.style.position = 'absolute';
            img.style.top = y + "px";
            img.style.left = x + "px";
            img.style.width = width + "px";
            img.style.height = height + "px";
            img.src = gif;
       document.getElementsByTagName('body')[0].appendChild(img); 
       
       this.update=function(){
           var speedX = 3;
           var speedY = 4;
           startX += speedX * dircectionX;
           startY += speedY * dircectionY;
           if (startX > W - widthGif || startX < 0) {
                dircectionX *= -1;
            }
            if (startY > H - heightGif || startY < 0) {
                dircectionY *= -1;
            }
            var imgMove= document.getElementsByTagName('img')[0]
           imgMove.style.left = startX + "px";
           imgMove.style.top = startY + "px";
       };
    }
    
    var gif = new createGif(startX, startY, widthGif, heightGif, linkGif)
    
    function animate(){
        requestAnimationFrame(animate); 
        gif.update()
    }
    animate();
    
};*/