function add() {
    var n = document.getElementById("name");
    var s = document.getElementById("surname");
    
   if(n.value == 0 && s.value == 0) {
    document.getElementById("name").classList.add("error");
    document.getElementById("surname").classList.add("error");
   }
   if(n.value == 0 && s.value != 0) {
    document.getElementById("name").classList.add("error");
   }
   if(n.value != 0 && s.value == 0) {
    document.getElementById("surname").classList.add("error");
   }
   if(n.value != 0 && s.value != 0){
    document.getElementById("name").classList.remove("error");
    document.getElementById("surname").classList.remove("error");
    var table = document.getElementById("students");
    newtable = table.insertRow(-1);

    name1 = newtable.insertCell(0);
    surname1 = newtable.insertCell(1);
    faculty1 = newtable.insertCell(2);
    name = document.getElementById("name").value;
    surname = document.getElementById("surname").value;
    faculty = document.getElementById("faculty").value;

    name1.innerHTML = name;
    surname1.innerHTML = surname;
    faculty1.innerHTML= faculty;

   }
    }

var demo = document.querySelector("#addStudent");
demo.addEventListener('click', add);