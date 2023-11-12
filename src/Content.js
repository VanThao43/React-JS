
// 1. useEffect(callback)       -> ít dùng
// - Gọi callback mỗi khi component re-render
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component được mounted
// 3. useEffect(callback, [dependency])
// - Callback sẽ được gọi lại mỗi khi dependency thay đổi


//----------------------
// 1. cả 3 trường hợp thì callback luôn được gọi sau khi component mounted
// Dùng useEffect với tác dụng là sau khi UI được render thì mới gọi đến useEffect


//1. callback luôn được gọi lại mỗi khi deps thay đổi
//2. Cleanup function luôn được gọi trước khi component unmounted


import { useEffect, useState } from "react"


const taps = ['posts', 'comments', 'albums']

function Content() {



    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])


    useEffect(() => {


        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)

        //Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }


    }, [])




    return (
        <div>
            {taps.map((tap) => (
                <button
                    key={tap}
                    style={type == tap ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tap)}
                >
                    {tap}
                </button>
            ))}
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title || post.name}</li>
                    ))
                }
            </ul>

            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    Go to Top
                </button>)

            }
        </div>
    )
}

export default Content