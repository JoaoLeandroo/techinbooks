const loadApiGoogleBooks = async (books: string, amount: number) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${books}&maxResults=${amount}&ang=pt-br`)
    if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
  
      return response.json()
}

export { loadApiGoogleBooks }
