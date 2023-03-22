import axios from 'axios';
import { useRouter } from 'next/router';

export async function getServerSideProps({ query }) {
  const response = await axios.get(`https://newsapi.org/v2/everything?q=${query.q}&apiKey=18558787e4ef4a3ba91050996fe44eac`);
  const articles = response.data.articles;
  return {
    props: {
      articles,
    },
  };
}

function Search({ articles }) {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Search;
