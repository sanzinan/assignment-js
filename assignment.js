

//kilometerToMeter Problem Solved

function kilometerToMeter (km){

    if (km == ( 0 || undefined) || km < 0) {
        return "Value Can't be zero or undefined or negative";
    }
    var meter = km *1000; // 1 kilometer is eqal to 1000 meter
  
    return meter;
    }
  
  var result = kilometerToMeter (10);
  console.log(result);

//budgetCalculator Problem Solve

function budgetCalculator(watch, phone, laptop){
    if (watch < 0 || phone < 0 || laptop < 0) {
        return " Please input with Positive value";

    } else if (watch == (null || undefined) || phone == (null || undefined) || laptop == (null || undefined)) {
        return "Price can't be a Null/Undefined Value";
    }
     /*Price of My Product
      watchPrice = 50/-
      phonePrice = 100/-
      laptopPrice = 500/-*/

    var total= (watch*50) + (phone*100) + (laptop*500);
    return total;
    }


  var totalPrice = budgetCalculator(1 , 1, 1);
  console.log(totalPrice);
//hotelCost Problem Solved

function hotelCost(daysToStay) {
  
    /* costOfFirstTenDays = 100/-
       costOfSecondTenDays = 80/-
       costOfRestOfTheDays = 50/-*/
  
    var totalHotelCost = 0;
    if (daysToStay == ( null|| undefined) || daysToStay < 0) {
        return "Value Can't be null or undefined or negative";
    }
    if ( daysToStay <= 10) {
        var totalHotelCost = daysToStay * 100;
        } 
        
   else if (daysToStay <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = (daysToStay - 10);
        var secondTenDays = remainingDays * 80;
        var totalHotelCost = firstTenDays + remainingDays;
        
  
      } 
    
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = (daysToStay - 20) ;
        var restOfTheDays= remainingDays*50;
        var totalHotelCost = firstTenDays + secondTenDays + restOfTheDays;
        return totalHotelCost;
    }
  }
  
  var result = hotelCost(71);
  console.log(result);
  
//megaFriend Problem Solved

function megaFriend(friendsName){
    
    var largestName = friendsName[0];


    if (friendsName == ( null|| undefined)) {
        return "Name Can't be null or undefined ";
    }
    for(var i = 0; i < friendsName.length; i++){
      var names = friendsName[i];
      if(names.length > largestName.length){
        largestName = names;
      }
      
    }
     return largestName;
  }
  var largestName =  megaFriend(["JIM", "DIM", "KARIMA", "Moutushi" , "mim", "Abdur Rahim" , "Abddur Karim Mia", "Fahim", "Habiba"]);
  console.log(largestName);
  
