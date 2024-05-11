const loadApiGoogleBooks = async (books: string) => {
    const livro = "python"
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${books}&maxResults=20&ang=pt-br`)
    if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
  
      return response.json()
}

export { loadApiGoogleBooks }
