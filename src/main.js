let subButton = document.getElementById('subButton');
let taskContainer = document.getElementById ('taskContainer')


subButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    taskContainer.appendChild(paragraph)
    console.log('p')
})
