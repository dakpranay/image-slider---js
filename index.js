let left=document.getElementById("left");
let right=document.getElementById("right");
let images=document.getElementById("image");
var point=0;
let a=['1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg'];
var source=a[point];
left.onclick=lowers;
right.onclick=rights;
setInterval(rights,3000);

function rights(){
    if(point>=0 && point<a.length-1){
        point+=1;
    }
    else{
        point=0;
    }
    source=a[point];
    images.src=source

}
function lowers(){
    if(point>0 && point<=a.length-1){
        point-=1;
    }
    else if(point==0){
        point=a.length-1;
    }
     source=a[point];
    images.src=source

}































