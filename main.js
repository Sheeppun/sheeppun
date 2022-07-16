var next = document.getElementById('next');

var arr = ["Panels/Panel1.png", "Panels/Panel2.png", "Panels/Panel3.png", "Panels/Panel4.png", "Panels/Panel5.png"];

var i = 0;

//next btn
next.addEventListener('click', function(){
   i++;
   if(i > arr.length - 1){
        i = 0;
   }
   document.getElementById('Panels').src = arr[i];
})
