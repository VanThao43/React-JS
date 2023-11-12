
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

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div>
            <h1>{width}</h1>
        </div>
    )
}

export default Content