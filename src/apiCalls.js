const getAllArticles = async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=70321f192dca421b910c2ccf17f781d8')
        if (!response.ok && response.state >= 500) {
            throw new Error(
                `${response.status} ${response.statusText}: We're sorry. Something went wrong with the server. Please try again.`
            )
        }
        if (!response.ok && response.status >= 400 && response.status < 500) {
            throw new Error(
                `${response.status} ${response.statusText}: Something went wrong. Please try again.`
            )
        }
        return response.json();
    };



export { getAllArticles };