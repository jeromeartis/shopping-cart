const groceryList =[{
  dairy:["eggs","cheese","milk","butter","yogurt","ice cream"],
  meat:["chicken","bacon","porkchops","steak","lamb","fish"],
  produce:["carrots","strawberries","tomatoes","oranges","parsley","lemon"]
}]


let value ='';
let filter = '';

const purchasedItems = [];

const render = function (inputStr){
    $('.list1').html(inputStr);
}

const display = function (value){
 $('.results').html(value)
}

const display1 = function (value){
 $('.results').html( value)
}

const print = function (){
  let inputStr = '';
  for(let i = 0; i < groceryList[0].dairy.length; i++){
    inputStr += `<div class="entry"><p class="dairy">${groceryList[0].dairy[i]}</p></div><p class="meat">${groceryList[0].meat[i]}</p></div><p class="produce">${groceryList[0].produce[i]}</p></div><br>`
  }
  render(inputStr);
}

const addItem = function (){
    value = $(this).text()
   if (!(purchasedItems.includes(value))){
     purchasedItems.push(value);
   }
   else {
     alert("Item has already been added")
   }
}

const showResults = function (){

  let newDiv = $('<div>');
  newDiv.text(`${purchasedItems}`);
  $('.results').empty()
  $('.results').append(newDiv);
  return purchasedItems
}

const deleteItem = function (e){
  e.preventDefault();

    let namedItem = prompt("Enter Item to be deleted");
    let index = purchasedItems.indexOf(namedItem)
    console.log(index);
     let deletedItem = purchasedItems.splice(index,1);
     alert(`${deletedItem} has been removed`);
    $('.results').empty();
    display1(purchasedItems);
}

const runCommand = function () {
  alert("Choose a filter: 'dairy', 'meat', 'produce'");
  let filter = prompt("Enter Filter Name");
  switch (filter) {
    case 'dairy':
    filterDairy();
      break;

    case 'meat':
    filterMeat();
    break;

    case 'produce':
    filterProduce();
    break;

    default:
  }
}

const filterDairy = function (){
  filter = 'dairy';
  // $('.dairy').empty();
  $('.dairy').show(`${groceryList[0].diary}`);
  $('.produce').hide(`${groceryList[0].produce}`);
  $('.meat').hide(`${groceryList[0].meat}`);
}
const filterMeat = function (){
  filter = 'meat';
  $('.dairy').hide(`${groceryList[0].diary}`);
  $('.produce').hide(`${groceryList[0].produce}`);
  $('.meat').show(`${groceryList[0].meat}`);
}

const filterProduce = function(){
  filter = 'produce';
  $('.dairy').hide(`${groceryList[0].diary}`);
  $('.produce').show(`${groceryList[0].produce}`);
  $('.meat').hide(`${groceryList[0].meat}`);
}

const submitItems = function (){
    alert(`Items purchased: ${purchasedItems}`)
    $('strong').html(purchasedItems.length)


}

print();
$('p').on("click", addItem);
$('p').on("click",showResults);
$('#deleteItem').on("click", deleteItem);
$('#filter').on("click", runCommand);
$('#submit').on("click",submitItems);
