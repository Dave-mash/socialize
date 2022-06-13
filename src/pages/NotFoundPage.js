// 404 page

import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <h1>Sorry! The page you're looking for was not found. <Link to="./">Go back Home</Link></h1>
    )
}

export default NotFoundPage;