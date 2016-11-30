// Your task is to loop through all the reindeer in the array, 
// - this runs the loop: (var i=0; i<reindeer.length; i++) -
// and add the name of the reindeer to the single HTML <div> element provided. 
// (This is what makes it viewable in a browser.)
// The name of the reindeer should be prepended 
// with the corresponding color from the other array.
// For example:
// Blue Dasher
// Red Dancer
// etc...

// Brackets tell you this element is an array. Array = group of elements that you can interact with individually.


var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

// document tells you that this element "coloredReindeer" is something that already exists in the HTML file.
// it only applies to the tag but not what's inside it
// we're grabbing a container, and we're calling it hohohoElement
var hohohoElement = document.getElementById("coloredReindeer");

// i is for index/incrementer & starts at 0 since it's an array
// the loop will stop when the count of the reindeer run out
// i++ lets you loop or count through the items in the array by their index
// console.log means it will log/print the colors & reinderr, 1 for 1, to the console.
// the first time it loops through and i is at 0, innerHTML is empty.
// we add the first line and create the innerHTML content.
// we're assigning the HTML content to list paragraphs of the colors + reindeer.

for (var i=0; i<reindeer.length; i++){
	console.log (colors[i] + ' ' + reindeer[i]);
	hohohoElement.innerHTML = hohohoElement.innerHTML 
							  +'<p>'+colors[i] + ' ' + reindeer[i]+'</p>';
}

// // To add a <p id> to each <p>:
// 	hohohoElement.innerHTML = hohohoElement.innerHTML 
// 							  +'<p id="'+reindeer[i]+'">'+colors[i] + ' ' + reindeer[i]+'</p>';
// }
// colors[3]='pink';
// 
// To change Dasher to Hello:
// document.getElementById('Dasher').innerHTML='Hello';