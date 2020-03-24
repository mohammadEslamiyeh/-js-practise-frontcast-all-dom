function addItem(){
    var inputdata;

    inputdata = document.getElementById("input").value;

    if (inputdata== ""){
        alert("لطفا کار خود را وارد کنید");
    }else{
        document.getElementById("input").value = "";
        let ptag = document.createElement("p");
        let txt = document.createTextNode(inputdata);
        let span = document.createElement("span");
        span.appendChild(txt);
        let resualt = document.getElementById("result");
        ptag.appendChild(span);
        resualt.appendChild(ptag);

        var span2 = document.createElement("span");
        var rmtxt = document.createTextNode("X");
        span2.appendChild(rmtxt);
        ptag.appendChild(span2);
        span2.style.color="red";
        ptag.addEventListener("click",taskdone);

        function taskdone(){
            /*baraye remove kardan rahaye ziadi bod vali ma amadim az tavabe java script estefade kardim*/
            span.style.textDecoration  = "line-through";   
        }
            /** 
             * javascript comment 
             * @Author: flydreame 
             * @Date: 2020-03-24 21:03:09 
             * @Desc: barayte yek moteghayeri attribute onclick tarif kardim 
             */
            var remove= document.createAttribute("onclick");
            /** 
             * javascript comment 
             * @Author: flydreame 
             * @Date: 2020-03-24 21:03:53 
             * @Desc: va be on moteghayer yek value dadim va value in meghdaresh in bashe
             * miad parent node yanoi oparent aslio az bein mibare 
             */
            remove.value = "this.parentNode.remove();";
            //va inja migim key remove beshe
            span2.setAttributeNode(remove);

        
    }
}