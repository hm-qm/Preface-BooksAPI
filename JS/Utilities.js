import * as dom from './DOM.js'



//Creates any element with parameterized classnames and innerHTML
export const createElement = (elementType='div', classname, key, innerHTML) => {
    const newElement = document.createElement(elementType);

    if(key){
        newElement.dataset.index = key;
    }

    if (innerHTML){
        newElement.innerHTML = innerHTML;
    }
    
    newElement.classList.add(classname);

    return newElement;
}

// Appends an array of elements to any query selectable parent element
export const appendElements = (parentElement, elementArr) => {

    const elementsToAppend = [...elementArr];

    elementsToAppend.map(element => parentElement.append(element));
};


export const constructBookCard = (data, index) => {
    
    //Define the innerHTML content for each div section in card
    const divImg = `<img src=${data.image}>`;
    const divTitle = `<h3>${data.title}</h3>`;
    const divSubTitle = `<span>${data.authors.join(", ")}</span>\u00A0\u00A0\u00A0<span>${data.publishedDate.slice(0,4)}</span>`;
    const divCategories = data.categories.map(category => `<span>${category.toLowerCase()}<span>`).join(" ");
    const divDescription = `<p>${data.description.replace(/^(.{200}[^\s]*).*/, "$1")}...</p>`;
    const divButtons = `<button>More Info</button><button>Buy</button>`;

    //Build the initial card section
    const section = [createElement('section', `bookCard`, `${index}`)];
    appendElements(dom.bookDisplay, section);

    //Flesh out the image section and add details section
    const cardSection = [
        createElement('div',`bookCard__image-container`, 0, divImg),
        createElement('div',`bookCard__detail-container`)
    ];
    appendElements(section[0], cardSection);

    //Flesh out the details section of card

    const details = [
        createElement('div', 'bookCard__detail-title', 0, divTitle),
        createElement('div', 'bookCard__detail-subtitle', 0, divSubTitle),
        createElement('div', 'bookCard__detail-categories', 0, divCategories),
        createElement('div', 'bookCard__detail-description', 0, divDescription),
        createElement('div', 'bookCard__detail-buttons', 0, divButtons),
    ]
    appendElements(cardSection[1], details);
}




