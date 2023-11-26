/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    // 1. UseEffect(callback)
    // 2. UseEffect(callback, [])
    // 3. UseEffect(callback, [deps])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            })
    }, [type])

    useEffect(() => {

        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <>
            {
                tabs.map((tab, index) => (
                    <button 
                        style={ type === tab ? {
                            backgroundColor: "#333",
                            color: "#fff"
                        } : {} }
                        key={index} 
                        onClick={() => setType(tab)}>
                        {tab}
                    </button>
                ))
            }

            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title || post.name}</li>
                    ))
                }
            </ul>

            {
                showGoToTop && 
                <button
                    onClick={() => window.scrollTo(0, 0)}
                    style={{
                        position: "fixed",
                        right: "20px",
                        bottom: "20px",
                    }}
                >Go to top</button>
            }
        </>
    )
}

export default Content