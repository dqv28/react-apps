/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

const lessons = [
    {
        id: 1,
        name: "ReactJS là gì? Tại sao nên học ReactJS?"
    },
    {
        id: 2,
        name: "SPA/MPA là gì?"
    },
    {
        id: 3,
        name: "Arrow functions"
    }
]

function Content() {
    const [lessonId, setLessonId] = useState(1)
    const [comments, setComments] = useState([])

    const handleComment = ({ detail }) => {

        setComments(prevState => [...prevState, detail])
        
    }

    useEffect(() => {

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }

    }, [lessonId])

    return (
        <>
            <ul>
                {
                    lessons.map(lesson => (
                        <li 
                            key={lesson.id}
                            style={{
                                color: lessonId === lesson.id ? "red" : "#333"
                            }}
                            onClick={() => setLessonId(lesson.id)}
                        >
                            {lesson.name}
                        </li>
                    ))
                }
            </ul>

            {
                comments && comments.map((comment, index) => (
                    <h4 
                        key={index}
                    >
                        {comment}
                    </h4>
                ))
            }
        </>
    )
}

export default Content