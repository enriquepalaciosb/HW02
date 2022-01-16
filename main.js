let usersWords = []; 
var ulItems = document.getElementById("listOfWords");

function insertWords() {
    for (let i = 0; i < 3; i++) {
        let usersResponse = prompt("Enter a word, any word");
        usersWords[i]= usersResponse;
    }
    usersWords.forEach(element => {
        let listItem = ulItems.appendChild(document.createElement("li"));
        listItem.innerHTML= element; 
    });
};
// function swapWords() {
//     oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); });
// };


