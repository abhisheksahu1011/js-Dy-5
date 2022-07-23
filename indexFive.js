console.log("working");



// q2





// Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text





    // Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

 

    const hw = document.getElementById("hw");

    const ch = document.getElementById("ch");

    ch.addEventListener('click',function(){
        hw.innerText="Welcome to Elevation academy";
    })




    
// Given an array of 0's and 1's find out number of 0's


    function numberOfZeros(array) {
        var zeros = [];
        var ones=[]
        for(var i = 0; i<array.length; i ++){
            if(array[i] === 0) {
                zeros.push(array[i]);
            }
        }
        console.log("Numbers of zeros ="+zeros.length);
        for(var j = 0; j < array.length; j ++){
      if(array[j] === 1) {
                ones.push(array[j]);
            }
        }
        console.log("Numbers of ones ="+ones.length);
    }




    // Given an array find out total no. of odd and even nos.

        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let odd = 0;
        let even = 0;
        for (let i = 0; i < array.length; i++) {
                if (array[i] & 1 == 1)
                    odd++;
                else
                    even++;
            }
        console.log("Even =", even);
        console.log("Odd = ", odd); 


        // Given a string find out number of vowels

        Array.from(str) .filter(letter => 'aeiou'.includes(letter)).length;
        console.log(countVowels('abcdefghijklmnopqrstuvwxyz'));


//  Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same


        obj = {name: "shek", age: 24}
        arr =["shek", 26]
        console.log(obj)
        console.log(arr)
        function myname() {
          const obj1Length = Object.keys(obj).length;
          const obj2Length = Object.keys(arr).length;
        
          if (obj1Length == obj2Length){
            return Object.keys(obj1Length).every(
              key => obj2.hasOwnProperty(key) && obj2[key] == obj1[key])
          }
          return false
        }
        console.log(myname())
        