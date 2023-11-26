/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

function Content() {
    const [avatar, setAvatar] = useState(180)

    useEffect(() => {

        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }

    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)
        setAvatar(file)

        // Xử lý khi chọn nhiều ảnh giống nhau
        e.target.value = null
    }

    return (
        <>
            <input 
                type="file" 
                onChange={handlePreviewAvatar}
            />

            <img
                src={avatar && avatar.preview}
                alt=""
                width="80%"
            />
        </>
    )
}

export default Content