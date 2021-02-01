import React, { useContext, useEffect } from "react"
import { CommentContext } from "./CommentsProvider"
import { Comment } from "./Comment"
import "./Comment.css"


export const CommentList = (props) => {
    const { comments, getComments } = useContext(CommentContext)

    useEffect(() => {
        getComments()
    }, [])

    return (
        <>
            <h1>Comments</h1>
            <div className="comments">
                {
                    comments.map(comment => {
                        return <Comment key={comment.id} comment={comment} />
                    })
                }
            </div>
        </>
    )
}