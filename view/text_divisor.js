//створення з тексту масиву символів з унікальними ід
var observer = new MutationObserver(function(mutationsList, observer) {
    mutationsList.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.target.id === 'example') {
            var newText = mutation.target.innerText.trim();
            updateText(newText);
        }
    });
});

var targetNode = document.getElementById('example');
var config = { childList: true, subtree: true };

observer.observe(targetNode, config);

function updateText(text) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
        var charElement = document.createElement('span');
        charElement.textContent = text[i];
        charElement.id = 'char_' + i;
        outputDiv.appendChild(charElement);
    }
}
