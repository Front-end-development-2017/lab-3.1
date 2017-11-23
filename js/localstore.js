(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let nameStored = localStorage.name;
  //let removeStored = localStorage.clear;
  //let clearName = document.getElementById("clear-name");

   // Displays the name in the console at this stage:
  console.log(`Name on page load: ${nameStored}`);
  

  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  }
  else {
    // There's no name in localStorage:
   myName.innerHTML = "stranger";
    console.log(`No name stored`);
  }
  

  function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    }  

   /* 
   if(userName.value === "")
    {
     localStorage.removeItem(myName, "charlie");
    }

    */
    // Gets the name the user entered:
    nameStored = userName.value;
  
    // Shows the name in "my-name":
    myName.innerHTML = nameStored;
    
    // Puts the name into localStorage:
    localStorage.name = nameStored;


  //  remove('clearName');

    //myName.innerHTML = removeName;

    
    // Displays the name in the console at the final stage:
    console.log(`New name stored: ${nameStored}`);
    
    return false;
  }

  function remove () {
  //let removeName = document.getElementById("clear-name");
 // localStorage.removeItem('name');
 console.log(`name cleared: ${localStorage.name}`);


  localStorage.clear();

  myName.innerHTML = "";

  //console.log(`after clear: ${localStorage.name}`);
}


// localStorage.name = removeStored;





  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; // for Firefox
  }
  else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }

  getName.addEventListener("reset", remove, myName);

}());
