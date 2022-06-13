
import '../styles/components/Posts.css';
import bulls from '../media/bulls.jpg'
import landscape from '../media/landscape.jpg'

const posts = [{
    title: 'Here is a title',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    media: landscape,
    author: 'John Doe',
    date: '10th June 2022',
    alt: 'landscape'
}, {
    title: 'Here is another title',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    media: bulls,
    author: 'Jane Doe',
    date: '10th June 2022',
    alt: 'bulls fighting'
}]

const Posts = () => {
    return (
        <div className='posts'>
            {
                posts.map((post, idx) => (
                    <div key={idx} className="post-item">
                        <div className="post">
                            <div className="post-img">
                                <img src={post.media} className="post-media" alt={post.alt} />
                            </div>
                            <div className='post-content'>
                                <div className="avatar"><h3>{post.author.split('')[0]}</h3></div>
                                <div className='post-details'>
                                    <h2>{post.title}</h2>
                                    <small>{post.date}</small>
                                    <p>{post.description}</p>
                                    <div className='interactions'>
                                        <small>reply</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts;