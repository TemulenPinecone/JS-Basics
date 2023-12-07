                    // OPTION 1

function floorDoorNum(floor, door, number) {
    if (number <= door) {floorResult = 1}
    else floorResult = number / door - ((number / door) % 1);
    if (number % door == 0) {numberResult = door} 
    else numberResult = number % door;
  console.log(floorResult+" Давхрын "+numberResult+" дахь хэд дэх айл");
}

function floorDoorNum(floor, door, number) {
  let numberResult, floorResult;
  if( number % door == 0){
    numberResult = door;
    floorResult = number / door;
  }
  else {
    numberResult = number % door;
    floorResult = (number - number % door ) / door + 1;
  }
  console.log(floorResult+" Давхрын "+numberResult+" дахь хэд дэх айл");
}


floorDoorNum(5, 4, 4);
floorDoorNum(5, 4, 8);
floorDoorNum(5, 4, 3);
floorDoorNum(5, 4, 12);
floorDoorNum(5, 4, 20);
floorDoorNum(5, 4, 20);



// floorDoorNum(10, 7, 7);
// floorDoorNum(12, 8, 8);
// floorDoorNum(12, 8, 7);
// floorDoorNum(12, 8, 32);



                        // OPTION 2

function floorDoorNum(floor, door, number) {
    let a = number - door; 10 - 4 = 6
    if (number )
    5*4=20
    1*4
    2*4
    1<=number   = floorResult

  }

  
  floorDoorNum(floor, door, number)
  floorDoorNum(5, 4, 10);