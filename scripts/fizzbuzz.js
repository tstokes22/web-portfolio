
document.getElementById("addTaskBtn").addEventListener("click", () => {
    let count = 100;
    let fizzbuzz = 0;
    for(let i = 0; count > i; i++){
        fizzbuzz += 1;
        if(fizzbuzz % 3 == 0){
            console.log("Fizz", fizzbuzz);
        }
        else if(fizzbuzz % 5 == 0){
            console.log("Buzz", fizzbuzz);
        }

        if(fizzbuzz % 3 == 0 && fizzbuzz % 5 == 0){
            console.log("FizzBuzz", fizzbuzz);
        }
    }
    
   
  });


