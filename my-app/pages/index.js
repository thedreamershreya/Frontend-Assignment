import { useState, useEffect } from 'react';
import axios from 'axios';
import Article from '../components/Article';
import CategoryMenu from '../components/CategoryMenu';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us${activeCategory ? `&category=${activeCategory}` : ''}&q=${searchTerm}&apiKey=18558787e4ef4a3ba91050996fe44eac`
        );
        setArticles(response.data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [searchTerm, activeCategory]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <CategoryMenu activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          {articles.map((article) => (
            <Article key={article.url} article={article} />
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
