cl=console.log;
var chemArray=[
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol:'Ne'},
];

var result='';
var chemInfoContainer = document.getElementById("chemInfoContainer");
for(var i=0; i< chemArray.length; i++){
    result += "<tr>";
    result += "<td>"+(i + 1)+"</td>";
    result += "<td>"+ chemArray[i].name+"</td>";
    result += "<td>"+ chemArray[i].weight+"</td>";
    result += "<td>"+ chemArray[i].symbol+"</td>";
    result += "</tr>";
}
cl(result);
chemInfoContainer.innerHTML=result;

var booksArray=[ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
 ];

 var booksInfo= document.getElementById("booksInfo");
 var result= '';
 for(var i=0; i< booksArray.length; i++){
    result += "<tr>";
    result +="<td>"+(i + 1)+"</td>";
    result += "<td>"+ booksArray[i].author+"</td>";
    result += "<td>"+ booksArray[i].title+"</td>";
    result += "<td>"+ booksArray[i].libraryID+"</td>";
    result +="</tr>";
 }
cl(result);
booksInfo.innerHTML= result;



