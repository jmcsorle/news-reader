import './App.css';
import Header from '../Header/Header';
import Headlines from '../Headlines/Headlines';
import SelectedArticle from '../SelectedArticle/SelectedArticle';
import Error from '../Error/Error';
// **import { getAllArticles } from '../../apiCalls';
import { mockData } from '../../mockData/mockData';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [allArticles, setAllArticles] = useState(mockData);
  const [allArticlesWithIds, setAllArticlesWithIds] = useState([])
  const [error, setError] = useState('');


  // useEffect(() => {
  //   const getAsyncArticles = async () => {
  //     try {
  //       const articles = await getAllArticles()
  //       const articlesWithIds = (articles) => {
  //         return articles.articles.map((article, index) => ({... article, id: index +1}));
  //       }
  //       setAllArticles(articlesWithIds(articles))
  //     } catch (error) {
  //       setError(`${error.message}: Something went wrong. Please try again.`)
  //     }
  //   }
  //   getAsyncArticles()
  // }, [])

  

  useEffect(() => {
    const addIdsToArticles = (allArticles) => {
        return allArticles.articles.map((article, index) => ({...article, id: index +1}));
      }

    setAllArticlesWithIds(addIdsToArticles(allArticles));
  }, []); 

  console.log("ALL ARTICLES", allArticles)
  console.log("WITH IDS", allArticlesWithIds)

  function formatUSDate(dateString) {
    const dateObject = new Date(dateString);
    if (!isNaN(dateObject.getTime())) {
        const formattedDateString = 
        (dateObject.getUTCMonth() +1).toString().padStart(2, '0') + '/' +
        dateObject.getUTCDate().toString().padStart(2, '0') + '/' +
        dateObject.getUTCFullYear();
        return formattedDateString;
    }
    return 'No date available.';
}

  return (
  <>
   <Header />
   {error ? (
    <Error error={error} />
   ) : (
   <main>
    <Routes>
      <Route
        path="/"
        element={<Headlines allArticlesWithIds={allArticlesWithIds} formatUSDate={formatUSDate} />}
      />
      <Route
        path="/articleDetails/:id"
        element={<SelectedArticle allArticlesWithIds={allArticlesWithIds} formatUSDate={formatUSDate}/>}
      />
      <Route
        path="*" element={<Error error={error}/>}
      />
    </Routes>
   </main> )}
  </>
  );
}

export default App;
