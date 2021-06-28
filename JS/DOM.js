const testData = [
    {
        title:"Harry Potter and the Prisoner of Azkaban",
        author: ['J.K. Rowling'],
        categories: ['Fiction'],
        description: "'Welcome to the Knight Bus, emergency transport for the stranded witch or wizard. Just stick out your wand hand, step on board and we can take you anywhere you want to go.' When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss... Having now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.'",
        image: "https://play.google.com/store/books/details?id=wHlDzHnt6x0C",
        link: "https://play.google.com/store/books/details?id=wHlDzHnt6x0C",
        pages: 435,
        preview: "http://books.google.com.au/books?id=wHlDzHnt6x0C&printsec=frontcover&dq=prisoner+of+azkaban&hl=&cd=1&source=gbs_api",
        publishedData:"2015-12-08",
        publisher: "Pottermore Publishing",
    }
]


// Variables

const searchForm = document.querySelector('[data-search-form]');
const searchInput = document.querySelector('[data-search-input]');
const searchSubmitBtn = document.querySelector('[data-search-btn]');
const bookDisplay = document.querySelector('[data-display-books');

//Add event listeners

/* Allows addition of event listener to any element, along 
with any number of functions */
const inputEvent = (someInput, eventType = 'click', ...funcs) => {

    someInput.addEventListener(eventType, (event) => {
        funcs.forEach(func => func(event));
    })
}

// (e) => handleSearchSubmit(e.searchInput.value)
inputEvent(searchSubmitBtn, 'submit', (e) => e.preventDefault(),)


// Functions

const createDivs = (classname) => {
    newDiv = document.createElement('div');
    newDiv.setAttribute('class', classname);
}

const createElements = (element, content, text=null, parentElement) => {
    const newElement = document.createElement(element);
    const elementContent = document.createElement(content);

    if (text){
        const textNode  = document.createTextNode(text);
        elementContent.appendChild(textNode);
    }

    newElement.append(elementContent);
    parentElement.append(newElement);
};

createElements('section', 'div', 'test', bookDisplay);