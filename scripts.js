document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);

    myColor = ['pink', 'orange', 'darkgrey', 'darksalmon', 'darkslategrey', 'orangered', 'palegreen', 'lightcoral'];


    button.addEventListener('click', function () {
        btnClicked();
    });

    let sqHolder = document.createElement('div');
    sqHolder.className = 'squareHolder';
    document.body.appendChild(sqHolder)

    var i = 1;
    let inText = document.createElement('div');
    let sqID = document.createTextNode(i);

    function btnClicked() {
        let inText = document.createElement('div');
        inText.className = 'square'
        let sqID = document.createTextNode(i);
        sqHolder.appendChild(inText);
        inText.appendChild(sqID);
        inText.id = i;
        i++;
        inText.addEventListener('dblclick', function () {
            if (inText.id % 2 === 1) {
                console.log('The world is an odd place!');

                if (document.body.contains(inText.previousSibling)) {
                    inText.previousSibling.remove();
                } else {
                    alert('THERE IS NO SIBLING!');
                }
            } else {
                console.log('The world is nice and even!');
                
                if (document.body.contains(inText.nextSibling)) {
                    inText.nextSibling.remove();
                } else {
                    alert('THERE IS NO SIBLING!');
                }
            }
        });
    }

    sqHolder.addEventListener('click', function (e) {
        e.target.style.backgroundColor = myColor[Math.floor(Math.random() * myColor.length)];

    });
});