
import '../styles/components/Friends.css';

const users = [{
    name: 'John Doe',
    id: 'randomIdJohn'
}, {
    name: 'Jane Doe',
    id: 'randomIdJane'
}]

const Friends = () => {
    return (
        <div className='friends-container'>
            <side className='section-title'>
                <h2>Friends</h2>
                <div className='friends-list'>
                    {users.map(user => (
                        <div key={user.id} className='user-item'>
                            <span>{user.name.split('')[0]}</span>
                            <p>{user.name}</p>
                        </div>
                    ))}
                </div>
            </side>
        </div>
    )
}

export default Friends;