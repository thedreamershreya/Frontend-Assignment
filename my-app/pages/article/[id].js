import axios from 'axios';
import { useRouter } from 'next/router';

export async function getServerSideProps({ params }) {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines/${params.id}?apiKey=18558787e4ef4a3ba91050996fe44eac`);
    const article = response.data;
    return {
      props: {
        article,
      },
    };
  }
  
function Article({ article }) {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}

export default Article;
