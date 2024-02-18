
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


function Content() {
    const [countdown, setCountdown] = useState(180)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000);

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Content