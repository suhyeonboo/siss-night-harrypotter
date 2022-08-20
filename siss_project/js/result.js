
var pointArray = [
      { name: 'G', value: 0},
      { name: 'S', value: 0},
      { name: 'H', value: 0},
      { name: 'R', value: 0}
    ];

function printresult(){
  var resultArray = pointArray.sort(function(a,b){
      if(a.value > b.value){
            return -1;
          }
      if(a.value < b.value){
          return 1;
          }
          return 0;
        });
let resultword=resultArray[0].name;
  return "final_"+resultword+".html";
};

function addresult(page, b){
  if (page === 1){
    if(b === 1){
      pointArray[2].value+=1;
      pointArray[3].value+=1;
    }else{
      pointArray[0].value+=1;
      pointArray[1].value+=1;
    }
  }
  if(page === 2){
    if(b === 1){
      pointArray[1].value+=1;
      pointArray[3].value+=1;
    }else{
      pointArray[0].value+=1;
      pointArray[2].value+=1;
    }
  }
  if(page === 3){
    if(b === 1){
      pointArray[0].value+=1;
      pointArray[1].value+=1;
      pointArray[3].value+=1;
    }else{
      pointArray[2].value+=1;
    }
  }
  if(page === 4){
    if(b === 1){
      pointArray[0].value+=1;
      pointArray[1].value+=1;
    }else{
      pointArray[2].value+=1;
      pointArray[3].value+=1;
    }
  }
  if(page === 5){
    if(b === 1){
      pointArray[0].value+=1;
      pointArray[1].value+=1;
      pointArray[2].value+=1;
    }else{
      pointArray[3].value+=1;
    }
  }
  if(page === 6){
    if(b === 1){
      pointArray[0].value+=1;
    }else{
      pointArray[1].value+=1;
      pointArray[2].value+=1;
      pointArray[3].value+=1;
    }
  }
  if(page === 7){
    if(b === 1){
      pointArray[0].value+=1;
      pointArray[2].value+=1;
    }else{
      pointArray[1].value+=1;
      pointArray[3].value+=1;
    }
  }
  if(page === 8){
    if(b === 1){
      pointArray[0].value+=1;
      pointArray[2].value+=1;
      pointArray[3].value+=1;
    }else{
      pointArray[1].value+=1;
    }
  }
  if(page === 9){
    if(b === 1){
      pointArray[0].value+=1;
      pointArray[3].value+=1;
    }else{
      pointArray[2].value+=1;
    }
  }
  if(page === 10){
    if(b === 1){
      pointArray[3].value+=1;
    }else{
      pointArray[0].value+=1;
      pointArray[2].value+=1;
    }
  }
  if(page === 11){
    if(b === 1){
      pointArray[3].value+=1;
    }else{
      pointArray[2].value+=1;
    }
  }
  if(page === 12){
    if(b === 1){
      pointArray[0].value+=1;
    }else{
      pointArray[1].value+=1;
    }
  }
  if(page === 13){
    if(b === 1){
      pointArray[1].value+=1;
      pointArray[3].value+=1;
    }else{
      pointArray[0].value+=1;
      pointArray[2].value+=1;
    }
  }
  if(page === 14){
    if(b === 1){
      pointArray[1].value+=1;
      pointArray[2].value+=1;
    }else{
      pointArray[0].value+=1;
      pointArray[3].value+=1;
    }
  }
  if(page === 15){
    if(b === 1){
      pointArray[0].value+=1;
      pointArray[2].value+=1;
    }else{
      pointArray[1].value+=1;
    }
  }
  if(page === 16){
    if(b === 1){
      pointArray[0].value+=1;
      pointArray[2].value+=1;
    }else{
      pointArray[3].value+=1;
    }
  }
}
