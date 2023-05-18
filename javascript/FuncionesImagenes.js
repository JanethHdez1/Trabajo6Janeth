var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = "./Imagenes/gato-bb.jpg";

imgArray[1] = new Image();
imgArray[1].src = "./Imagenes/gatito-acostado.jpg";

imgArray[2] = new Image();
imgArray[2].src = "./Imagenes/gatito-caja.jpg";

imgArray[3] = new Image();
imgArray[3].src = "./Imagenes/gatito.jpg";

imgArray[4] = new Image();
imgArray[4].src = "./Imagenes/gato-grande.jpeg";

function sigImagen(){
    var img = document.getElementById("mainImage");
    for(var i = 0; i < imgArray.length;i++){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImage").src = imgArray[0].src;
                break;
            }
            document.getElementById("mainImage").src = imgArray[i+1].src;
            break;
        }
    }
}
function antImagen(){
    var img = document.getElementById("mainImage");
    for(var i = imgArray.length-1; i >=0 ;i--){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImage").src = imgArray[4].src;
                break;
            }
            document.getElementById("mainImage").src = imgArray[i-1].src;
            break;
        }
    }
}

