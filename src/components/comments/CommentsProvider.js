import React, { useState } from "react"

export const CommentContext = React.createContext()

export const CommentsProvider = (props) => {
    const [comments, setComments] = useState([])

    const getCommentsByPostId = (postId) => {
        return fetch(`http://localhost:8088/comments/${postId}`)
        .then(res => res.json())
        .then(setComments)
    }

    const addComment = comment => {
        return fetch("http://localhost:8088/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        .then(getCommentsByPostId)
    }

    return (
        <CommentContext.Provider value = {{
            comments, addComment, getCommentsByPostId
        }}>
            {props.children}
        </CommentContext.Provider>
    )
}