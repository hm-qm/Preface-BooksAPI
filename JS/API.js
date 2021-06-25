// export const getBreeds = async (page) => {
//     const responsePromise = fetch(`https://catfact.ninja/breeds?page=${page}`);
//     const response = await responsePromise;
//     const jsonResponse = await response.json();
//     return jsonResponse.data;
// };


export const getBooks = async (query, startIndex=0, maxResults=10) => {
    const responsePromise = fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`);
    const response = await responsePromise;
    const dataJson = await response.json()
    const bookItems = dataJson.items;

    console.log(bookItems)
    return bookItems;
}

getBooks('a thousand splendid')