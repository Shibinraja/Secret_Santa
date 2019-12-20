//Durstenfeld Shuffle
function randomize(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array

}


array = ['Shibin', 'Siddharth', 'Prem', 'Diana', 'Shilpa', 'Joseph', 'Rachel', 'Karishma']

sortedarray = array.sort()

Shuffled = sortedarray.map(function(x, i) {
  newArr = new randomize(array);
  if (x == newArr[i]){
    delete  Object.keyname;

  }
  else{
  return { "Parent": x, "Child": newArr[i]}
  }
});

console.log(Shuffled)




 
