function calculateTax(income, expenses) {
    if(income<0 || expenses<0 || income<expenses || typeof income !== "number" || typeof expenses !== "number"){
        return "Invalid Input";
    }

    const totalIncome=income-expenses;
    const taxAmount=totalIncome*.20;

    return taxAmount;
};


function sendNotification(email) {

    const elements =email.split("");
    if(elements.includes("@") === false){
        return "Invalid Email";

    }

   const elementOfMessage = email.split("@")
 
 const notification = elementOfMessage[0]+" sent you an email from "+elementOfMessage[1]
 return notification;
};

function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return  "Invalid Input";
    };


 let number=  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

for(let elements of name){

    if(number.includes(elements)){
        
        return true;
       
    }
  
};
return false;

};
function calculateFinalScore(obj) {
    if(typeof obj !== "object"){
        return  "Invalid Input";
    }
    let totalGrade=0;
    if(obj.isFFamily === true){
        obj.parentProfession=20;
        totalGrade=obj.testScore+obj.schoolGrade+obj.parentProfession;
    }
    else{
        totalGrade=obj.testScore+obj.schoolGrade;
    }
    return totalGrade >=80? true : false;
};

function waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid Input";
    }
    let sumOfWaitingTime =0;
    for(let items of waitingTimes){
       sumOfWaitingTime+=items;
    };
 let averageWaitingTime=Math.round(sumOfWaitingTime/waitingTimes.length);
 let remainingPeople = (serialNumber - waitingTimes.length)-1;
 let waitingTimeOfIsrat =remainingPeople*averageWaitingTime;
 return waitingTimeOfIsrat;
};

