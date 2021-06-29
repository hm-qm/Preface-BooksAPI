import * as utilities from './Utilities.js'

export const getBooks = async (query, startIndex=0, maxResults=10) => {
    const responsePromise = fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`);
    const response = await responsePromise;
    const dataJson = await response.json()
    const bookItems = dataJson

    return bookItems;
}


export const searchResults = async (query, startIndex=0, maxResults=10) => {
    const rawBookData = await getBooks(query, startIndex, maxResults)

    const cleanBookData = rawBookData.items.map((book) => ({
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors || [""],
        description: book.volumeInfo.description || "",
        pages: book.volumeInfo.pageCount || "",
        link: book.volumeInfo.canonicalVolumeLink,
        preview: book.volumeInfo.previewLink,
        publisher: book.volumeInfo.publisher || "",
        publishedDate: book.volumeInfo.publishedDate || "",
        categories: book.volumeInfo.categories || [""],
        image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/100x150"
    }))

    console.log(cleanBookData)
    return cleanBookData;
}


export const renderSearch = async(query, index=0, maxResults=10) => {
    const results = await searchResults(query, index, maxResults);

    results.map((book, index) => utilities.constructBookCard(book, index));
}
