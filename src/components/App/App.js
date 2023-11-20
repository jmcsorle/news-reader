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
  const [error, setError] = useState('');
  // const [selectedArticle, setSelectedArticle] = useState(0);

  // **useEffect(() => {
  //   const getAsyncArticles = async () => {
  //     try {
  //       const articles = await getAllArticles()
  //       setAllArticles(articles)
  //     } catch (error) {
  //       setError(`${error.message}: Something went wrong. Please try again.`)
  //     }
  //   }
  //   getAsyncArticles()
  // }, [])

  // const handleSelection = () => {

  // }

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
        element={<Headlines allArticles={allArticles}/>}
      />
      <Route
        path="/articleDetails/:id"
        element={<SelectedArticle />}
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
