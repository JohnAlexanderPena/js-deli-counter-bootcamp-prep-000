var num = 0;
function takeANumber(katzDeliLine){
  num++;
  katzDeliLine.push(num);
  return num;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var newLine =[];
    for (var i = 0; i < katzDeliLine.length; i++){
      newLine.push(`${i + 1}. ${katzDeliLine[i]}`);
    } 
    return `The line is currently:${newLine.join(', ')}`;
  } 
}