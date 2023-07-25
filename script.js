Calculate_BMI = (w, h) => {
    bmi = w / (h * h);
    return bmi;
  }
  let weight = prompt("Enter your weight in kg: ");
  let height = prompt("Enter your height in meters: ");
  console.log("Your BMI is: " + Calculate_BMI(weight, height));
  
  //Task-2
  
  let swap=(x,y)=>{
    x=x^y;
    y=x^y;
    x=x^y;
  console.log("After Swapping a = "+x+" and b = "+y+"\n");
  }
  let a=prompt("Enter value of a: ");
  let b=prompt("Enter value of b: ");
  
  console.log("Before Swapping a = "+a+" and b = "+b);
  swap(a,b);
  
  
  //Task-3
  
  let factorial=(fact)=>{
    i=fact-1;
    while(i!=0){
      fact=fact*i
      i--;
    }
    return fact;
  }
  let num=prompt("Enter a number to take it factorail: ");
  console.log("Factorial of "+num+" is: "+factorial(num));