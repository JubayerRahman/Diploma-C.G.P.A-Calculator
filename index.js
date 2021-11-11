
function result(){
    var sem1 = document.getElementById("1st").value;
    var sem2 = document.getElementById("2nd").value;
    var sem3 = document.getElementById("3rd").value;
    var sem4 = document.getElementById("4th").value;
    var sem5 = document.getElementById("5th").value;
    var sem6 = document.getElementById("6th").value;
    var sem7 = document.getElementById("7th").value;
    var sem8 = document.getElementById("8th").value;

    var sem11 = sem1/(100/5);
    var sem22 = sem2/(100/5);
    var sem33 = sem3/(100/5);
    var sem44 = sem4/(100/10);
    var sem55 = sem5/(100/15);
    var sem66 = sem6/(100/20);
    var sem77 = sem7/(100/25);
    var sem88 = sem8/(100/10);

     var cgpa= sem11+ sem22 + sem33 + sem44 + sem55 + sem66 + sem77 + sem88;

    document.write("Your C.G.P.A is=" + cgpa.toFixed(2) +"<br>");
     if(cgpa==4.00)
     document.writre("congratulation,You got an A+");
 else if(cgpa >= 3.75 && cgpa <= 3.99)
      document.write("congratulation,You got an A");   
 else if(cgpa >=3.50 && cgpa <= 3.74)
      document.write("congratulation,You got an A-"); 
 else if(cgpa >=3.25 && cgpa <= 3.49)
      document.write("congratulation,You got an B+"); 
 else if(cgpa >=3.00 && cgpa <= 3.24)
      document.write("congratulation,You got an B");
 else if(cgpa >=2.75 && cgpa <= 2.99)
      document.write("You got an B-");
 else if(cgpa >=2.50 && cgpa <= 2.74)
      document.write("You got an C+");
 else if(cgpa >=2.25 && cgpa <= 2.49 )
      document.write("You got an C");
 else if(cgpa >=2.00 && cgpa <= 2.24)
      document.write("You got an D");
 else if(cgpa >= 4.00 || cgpa< 0)
      document.write("Sorry, please enter valid information");  
 else
 document.write("Sorry, to inform you that your C.G.P.A is F")

}