//this script monitor text changes in 'example', when text changed split the text by letters and sets a unique id


//monitor text changes in 'example' block
let observer = new MutationObserver(function(mutationsList, observer) {
    mutationsList.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.target.id === 'example') {
            let newText = mutation.target.innerText.trim();
            updateText(newText);
        }
    });
});

let targetNode = document.getElementById('example');
let config = { childList: true, subtree: true };
observer.observe(targetNode, config);


//text-splitting function
function updateText(text) {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
        let charElement = document.createElement('span');
        charElement.textContent = text[i];
        charElement.id = 'char_' + i;
        outputDiv.appendChild(charElement);
    }
}
