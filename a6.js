// Q1. Create a Function
// Complete the function in the editor. In which you are given one object as a parameter, in that object, there is a data member
// named name. Your task is to create a method inside this object named setter, such that this method will print the value of the
// data member named as name.
// Input Format
// The input will contain one name only, which denotes the only data member of the object.
// Output Format
// Your task is to create a method inside this object named as setter such that this method will print the value of the data
// member named as a name.
// Example
// Sample Input
// Utkarsh
// Sample Output
// Utkarsh
var obj={
    name:"Utkarsh",
   setter: function(){
        return (this.name);

    }
}
function objcall(obj){
    return obj.setter();
    

}
console.log(objcall(obj))

// Q2. Delete a Parameter
// Complete the function in the editor. You have an object as a parameter. In which you have to delete the rollno property from
// the object and return the object.
// Input Format
// You have to give two inputs one name and the second as rollno separated by new line.
// Output Format
// If you have deleted the rollno property in the object then the code will print "True" otherwise "False".
// Example
// Sample Input
// Utkarsh 129
// Sample Output
// True

var obj={
    name:"utkarsh",
    rollno:129,
}

function deleteRollNo(obj) {
    if(obj.hasOwnProperty('rollno')){
        delete obj.rollno;
    }
    if(!obj.hasOwnProperty('rollno')){
        console.log("True");
        return obj;
    }
    console.log("False");
    return obj;
}
deleteRollNo(obj);

// Q3. Check whether the Package is Dream Package or not
// Complete the function in the editor. In which you are given an object as a parameter. In that object, there is one property named as salary
// if the salary is maximum than 5 lakh then return "Dream" otherwise return "NotDream".
// Input Format
// The first Line contains 1 package of a student.
// Output Format
// If the salary is a maximum of 5 lakh then return "Dream" otherwise return "NotDream".

var employee ={
    employeeId:1,
    name:"Dhruv Takkar",
    salary:500000,
    location:"Noida",
    Profile:"Full Stack Developer",

}
function dreamPackage(obj){
    if(obj.salary>=500000){
        return "Dream";
    }
else{
    return "NotDream";
}
}
console.log(dreamPackage(employee));

// Q4. Check whether the Object has a parameter or not
// Complete the function in the editor. In which you are given an object as a parameter. You have to return "false" if there is no
// parameter in the object otherwise return "true".
// Input Format
// 0 as a means no variable in an object and 1 means there are variables in an object.
// Output Format
// Return "false" if there is no parameter in the object otherwise return "true".
// Example
// Sample Input
// 1
// Sample Output
// true

var obj ={
    name:"Dhruv Takkar",
    age:22,
    location:"Noida",
}
function checkParameter(obj){
    if(Object.keys(obj).length===0){
        return false;

    }
    else{
        return true;
    }
}
console.log(checkParameter(obj));


// Q5. Merge the Objects
// Complete the function in the editor. In which you are given two objects as a parameter.In which you have to merge two
// objects and return a single object.
// Input Format
// The input consists of four lines, In which first lines contains two data members of first object which are defined as name and
// id. And the next two lines contains two data members for the second object which are defined as state and code.
// Output Format
// Just complete the function.
// Example
// Sample Input
// Utkarsh
// 129
// Haryana
// 121009
// Sample Output
// Utkarsh
// 129
// Haryana
// 121009
var obj1={
    name:"Utkarsh",
    id:129,
}
var obj2={
    state:"Haryana",
    code:121009,
}
function mergeObject(obj1,obj2){
    return{...obj1,...obj2}
}
console.log(mergeObject(obj1,obj2));

// Q6. Object Multiplyer
// Complete the function in the editor. In which you are given an object and a digit N as a parameter.In the object there are tw o
// variable id and houseno are defined as a data member. You have to multiply both the data members with a given digit N.
// Input Format
// There are three line in input, where the first one contains N, And the next two lines contains the first data member i.e. id and
// second data member i.e. houseno.
// Output Format
// Just complete the function, No need to print anything.
// Example
// Sample Input
// 2 12 146
// Sample Output
// 24 292
var obj={
    id:12,
    houseno:146,
}
function objMul(obj,N){
    var id=obj.id*N;
    var houseno=obj.houseno*N;
    return {...obj, id:id,houseno:houseno}
}
console.log(objMul(obj,2));

// Q7. Find the sum of Object Members
// You are given a function Check which takes an object Obj as a parameter. Your taks is to find out the sum of the three data
// members of the object. The data members are named as p1, p2, p3.
// Note: You have to complete Check function. No need to take any input.
// Input Format
// The input contains three number p1, p2 and p3, which represents the data members of the object.
// Output Format
// Return the sum of all members of the given object.
// Constraints
// 1≤p1,p2,p3≤1000
// Example
// Sample Input
// 1 2 3
// Sample Output
// 6

function objSum(obj){
    var sum=obj.p1+obj.p2+obj.p3;
    return sum;
}
var obj={
    p1:1,
    p2:2,
    p3:3,
}
console.log(objSum(obj));

// Q8. Check whether the Objects are same or not.
// Complete the function in the editor. In which you are given an object as a parameter. That object contains two variables
// name and id. Your task is to compare the object name and id to the new_name and new_id given there as a parameter.
// Return "true" if new_name and id are same as objects name and id otherwise return "false".
// Input Format
// The first line contains one name and one id separated by new line. The second line contains new_name and new_id
// separated by new line.
// Output Format
// Return "true" if both objects are same else return "false".
// Example
// Sample Input
// Utkarsh 2 Prepbytes 3
// Sample Output
// false

var obj={
    name:"Utkarsh",
    id:2,
    new_name:"Dhruv",
    new_id:3,
}
function check(obj){
    if(obj.name===obj.new_name&&obj.id===obj.new_id)
        return true;
    else
    return false;
}
console.log(check(obj));
