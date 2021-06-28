import { getBooks } from "./API.js";


// Queries for argument in API call, returns a cleaned data array

const cleanApiData = async (query, startIndex=0, maxResults=10) => {
    const rawBookData = await getBooks(query, startIndex, maxResults)

    const cleanBookData = rawBookData.items.map((book) => ({
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors || null,
        description: book.volumeInfo.description || null,
        pages: book.volumeInfo.pageCount || null,
        link: book.volumeInfo.canonicalVolumeLink,
        preview: book.volumeInfo.previewLink,
        publisher: book.volumeInfo.publisher || null,
        publishedDate: book.volumeInfo.publishedDate || null,
        categories: book.volumeInfo.categories || null,
        image: book.volumeInfo.imageLinks.thumbnail || null
    }))

    return cleanBookData;
}

cleanApiData('prisoner of azkaban', 0, 10)


const searchResults = async (input) => {
    const searchResults =  await cleanApiData(input);
    console.log(searchResults)
    return searchResults
}

searchResults('starting with why')