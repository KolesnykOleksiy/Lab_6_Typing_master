function updateText(text) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = '';
    [...text].forEach((char, index) => {
        const charElement = document.createElement('span');
        charElement.textContent = char;
        charElement.id = 'char_' + index;
        outputDiv.appendChild(charElement);
    });
}

const observerConfig = { childList: true, subtree: true };
const targetNode = document.getElementById('example');

if (targetNode) {
    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.target.id === 'example') {
                const newText = mutation.target.innerText.trim();
                updateText(newText);
            }
        });
    });

    observer.observe(targetNode, observerConfig);
}
