console.log('test');

function appendDiv() {
        const myDiv = document.createElement('div');
        myDiv.classList.add('whiteBG');
        const myP = document.createElement('p');
        myP.innerText = 'Great walk';
        myP.classList.add('cool');
        myDiv.appendChild(myP);
        appendImg(myDiv);
        const heading = document.createElement('h2');
        heading.textContent = 'Cool Things';
        myDiv.insertAdjacentElement('afterbegin', heading);
        document.body.appendChild(myDiv);
        myDiv.insertAdjacentElement('beforebegin', heading);
        window.scrollTo(0, document.body.scrollHeight);
}

function appendImg(el) {
        const myImg = document.createElement('img');
        myImg.src = 'https://picsum.photos/100';
        el.appendChild(myImg);
        window.scrollTo(0, document.body.scrollHeight);
}

appendDiv();

const ulList = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'One';
ulList.appendChild(li1);
const li3 = document.createElement('li');
li3.innerText = 'Three';
ulList.appendChild(li3);

const li2 = document.createElement('li');
li2.innerText = 'Two';
li3.insertAdjacentElement('beforebegin', li2);

const li4 = li2.cloneNode(true);
// li4.innerText = 'Four';
ulList.appendChild(li4);

document.body.appendChild(ulList);
