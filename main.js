let usersWords = []; 
var ulItems = document.getElementById("listOfWords");
var ulSwappedItems = document.getElementById("listOfSwappedWords");

function insertWords() {
    for (let i = 0; i < 3; i++) {
        let usersResponse = prompt("Enter a word, any word");
        usersWords[i]= usersResponse;
    }
    usersWords.forEach(element => {
        let listItem = ulItems.appendChild(document.createElement("li"));
        listItem.innerHTML= element; 
    });
	document.getElementById("startButton").style.display = "none";
	document.getElementById("swapButton").style.display = "block";
};
function swapWords() {
	document.getElementById("firstSection").style.display = "none";	
	document.getElementById("secondSection").style.display = "block";	
	const map1 = usersWords.map(x => x.charAt(x.length - 1) + x.substring(1, x.length - 1) + x.charAt(0)); 
	map1.forEach(element => {
        let listItem = ulSwappedItems.appendChild(document.createElement("li"));
        listItem.innerHTML= element; 
    });
};


