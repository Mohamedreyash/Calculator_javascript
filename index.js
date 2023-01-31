function view(value){
    let out=document.querySelector('#input').value+=value;
}
function calculate(){
    let out=document.querySelector('#input').value;
    try{
        let res=eval(out);
        if(res!=undefined){
            document.querySelector('#input').value=res;
        }
    }catch(err){
        alert(err.message);
        document.querySelector('#input').value=" ";
    }
}
function clr(){
    document.getElementById('input').value="";
}