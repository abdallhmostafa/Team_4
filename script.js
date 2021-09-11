        setInterval(function(){
            
            if(document.getElementsByClassName("dot")[0].classList.contains("active"))
            {
                document.getElementsByClassName("dot")[1].classList.add("active");
                document.getElementsByClassName("dot")[0].classList.remove("active");

            }
            else if ( document.getElementsByClassName("dot")[1].classList.contains("active"))
             {
                 document.getElementsByClassName("dot")[0].classList.add("active");
                document.getElementsByClassName("dot")[1].classList.remove("active");


            }
        },5000);
        
     



setInterval(function(){
    
    if(document.getElementsByClassName("item")[0].classList.contains("play") && document.getElementsByClassName("item")[1].classList.contains("play") && document.getElementsByClassName("item")[2].classList.contains("play")){
        document.getElementsByClassName("item")[3].classList.add("play");
         document.getElementsByClassName("item")[4].classList.add("play");
          document.getElementsByClassName("item")[5].classList.add("play");
        document.getElementsByClassName("item")[0].classList.remove("play");
        document.getElementsByClassName("item")[1].classList.remove("play");
        document.getElementsByClassName("item")[2].classList.remove("play");

    }
    else if (document.getElementsByClassName("item")[3].classList.contains("play") && document.getElementsByClassName("item")[4].classList.contains("play") && document.getElementsByClassName("item")[5].classList.contains("play")) {
          document.getElementsByClassName("item")[0].classList.add("play");
         document.getElementsByClassName("item")[1].classList.add("play");
          document.getElementsByClassName("item")[2].classList.add("play");
         document.getElementsByClassName("item")[3].classList.remove("play");
        document.getElementsByClassName("item")[4].classList.remove("play");
        document.getElementsByClassName("item")[5].classList.remove("play");
         }


},6000000);

function next() {

  if(document.getElementsByClassName("item")[0].classList.contains("play") && document.getElementsByClassName("item")[1].classList.contains("play") && document.getElementsByClassName("item")[2].classList.contains("play")){
        document.getElementsByClassName("item")[3].classList.add("play");
         document.getElementsByClassName("item")[4].classList.add("play");
          document.getElementsByClassName("item")[5].classList.add("play");
        document.getElementsByClassName("item")[0].classList.remove("play");
        document.getElementsByClassName("item")[1].classList.remove("play");
        document.getElementsByClassName("item")[2].classList.remove("play");

    }
    else if (document.getElementsByClassName("item")[3].classList.contains("play") && document.getElementsByClassName("item")[4].classList.contains("play") && document.getElementsByClassName("item")[5].classList.contains("play")) {
          document.getElementsByClassName("item")[0].classList.add("play");
         document.getElementsByClassName("item")[1].classList.add("play");
          document.getElementsByClassName("item")[2].classList.add("play");
         document.getElementsByClassName("item")[3].classList.remove("play");
        document.getElementsByClassName("item")[4].classList.remove("play");
        document.getElementsByClassName("item")[5].classList.remove("play");
         }

}

function prev(){

    if(document.getElementsByClassName("item")[0].classList.contains("play") && document.getElementsByClassName("item")[1].classList.contains("play") && document.getElementsByClassName("item")[2].classList.contains("play")){
        document.getElementsByClassName("item")[3].classList.add("play");
         document.getElementsByClassName("item")[4].classList.add("play");
          document.getElementsByClassName("item")[5].classList.add("play");
        document.getElementsByClassName("item")[0].classList.remove("play");
        document.getElementsByClassName("item")[1].classList.remove("play");
        document.getElementsByClassName("item")[2].classList.remove("play");

    }
    else if (document.getElementsByClassName("item")[3].classList.contains("play") && document.getElementsByClassName("item")[4].classList.contains("play") && document.getElementsByClassName("item")[5].classList.contains("play")) {
          document.getElementsByClassName("item")[0].classList.add("play");
         document.getElementsByClassName("item")[1].classList.add("play");
          document.getElementsByClassName("item")[2].classList.add("play");
         document.getElementsByClassName("item")[3].classList.remove("play");
        document.getElementsByClassName("item")[4].classList.remove("play");
        document.getElementsByClassName("item")[5].classList.remove("play");
         }

}