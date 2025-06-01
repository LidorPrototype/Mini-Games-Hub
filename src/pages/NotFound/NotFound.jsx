import './NotFound.css'
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
