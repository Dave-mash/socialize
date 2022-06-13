import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
// Home page

import Friends from '../components/Friends';
import Posts from '../components/Posts';

import '../styles/pages/Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="posts-container">
                <Friends />
                <Posts />
            </div>
            <Footer />
        </>
    )
}

export default Dashboard;