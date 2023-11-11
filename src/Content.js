
// 1. useEffect(callback)       -> ít dùng
// - Gọi callback mỗi khi component re-render
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component được mounted
// 3. useEffect(callback, [dependency])


//----------------------
// 1. cả 3 trường hợp thì callback luôn được gọi sau khi component mounted
// Dùng useEffect với tác dụng là sau khi UI được render thì mới gọi đến useEffect

import { useEffect, useState } from "react"

function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [])




    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content