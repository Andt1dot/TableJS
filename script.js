function sortColumn()
{
    var input,filter,table,tr,td,i,nume,prenume,virsta;

    input=document.getElementById("inputID");
    filter=input.value.toUpperCase();
    table=document.getElementById("tableID");
    tr=table.getElementsByTagName("tr");

    for(i=0;i<tr.length;i++)
    {
        td=tr[i].getElementsByTagName("td")[1];
        if(td)
        {
            if(td.innerHTML.toUpperCase().indexOf(filter)>-1)
            {
                tr[i].style.display=" ";
            }

            else{
                tr[i].style.display="none";
            }
        }
    }
}

function myChangeFunction()
{
    var x=document.getElementById("mySelect").value;
    document.getElementById("inputID").placeholder="Filtrare dupa"+" "+x;    

    switch(x)
    {
        
       case "nume": {
        alert("Nume")
        for(i=0;i<tr.length;i++)
    {
        nume=tr[i].getElementsByTagName("td")[1];
        
        if(nume)
        {
            if(nume.innerHTML.toUpperCase().indexOf(filter)>-1)
            {
                tr[i].style.display=" ";
            }

            else{
                tr[i].style.display="none";
            }
        }
    }
    } break;


    case "prenume":{
     alert("Prenume")
     var input=document.getElementById("inputID");
     var filter=input.value.toUpperCase();
     var table=document.getElementById("tableID");
     var tr=table.getElementsByTagName("tr");
        console.log(tr)
     for(i=0;i<tr.length;i++)
     {
        prenume=tr[i].getElementsByTagName("td")[2];
        
        if(prenume)
        {
            if(prenume.innerHTML.toUpperCase().indexOf(filter)>-1)
            {
                tr[i].style.display=" ";
            }

            else{
                tr[i].style.display="none";
            }
        }
    }
    } break;


    case "virsta": {

       alert("Virsta");
        for(i=0;i<tr.length;i++)
        {
        virsta=tr[i].getElementsByTagName("td")[3];
       
        if(virsta)
        {
            if(virsta.innerHTML.toUpperCase().indexOf(filter)>-1)
            {
                tr[i].style.display=" ";
            }

            else{
                tr[i].style.display="none";
            }

        }
    }
    } break;   
 

    }
}