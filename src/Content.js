
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
//3. Cleanup luôn được gọi trước khi callback được gọi (trừ lần mounted)


import { useEffect, useState } from "react"


function Content() {

    const [avatar, setAvatar] = useState()

    useEffect(() => {

        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar &&
                <img src={avatar.preview} alt="" width="80%" />
            }
        </div>
    )
}

export default Content