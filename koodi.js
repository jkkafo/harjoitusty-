function showInput() 
{	
    let form = document.forms[0].elements; 
    let date = new Date();
    let message_entered = date;
    
    for(var i = 0, j = form.length;i < j;i++) //käy läpi kaikki annetut tiedot ja lisää ne 'message.entered'-muuttujaan
    {
        
        if(form[i].type == "text") {
            message_entered += ("<br>"+ form[i].value);}
        
    }

    ;

    if(!document.getElementById("important").checked) {
    document.getElementById('display').innerHTML = message_entered; //laittaa annetut tiedot näkyville 'display'-kohtaan
    } else{
        document.getElementById('display').innerHTML = "<span style='color: red;'>"+message_entered+"</span>"; //annetut tiedot punaisella jos tärkeä-kohta on valittu
    }
}