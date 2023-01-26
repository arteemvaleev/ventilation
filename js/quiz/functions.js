function getRadioInput(name){

    let inputs = document.querySelectorAll("[name="+name+"]")
    let input = false

    for(var i in inputs){

        if(inputs[i].checked){
            
            input = inputs[i]

        }

    }

    return input;

}


document.querySelector("#sldr2ir").onmousemove = function(){

    $("#sldr2iv").html(document.querySelector("#sldr2ir").value+" м²")

 }
 document.querySelector("#s2ccl").onclick = function(){
    
    if(Number(document.querySelector("#s2c").innerText) < 2){

       return false;

    }

    document.querySelector("#s2c").innerText = Number(document.querySelector("#s2c").innerText)-1
 }
 document.querySelector("#s2ccr").onclick = function(){
    if(Number(document.querySelector("#s2c").innerText) >= 10){

       return false;

    }

    document.querySelector("#s2c").innerText = Number(document.querySelector("#s2c").innerText)+1
 }


function to_mob(){
   if(document.body.clientWidth < 750){

      document.querySelectorAll(".pc").forEach((el) => {

         el.remove()

      })

   }

   if(document.body.clientWidth >= 750){

      document.querySelectorAll(".mob").forEach((el) => {

         el.remove()

      })

}
}


to_mob()