import React, { useContext, useEffect } from "react"
import { CommentContext } from "./CommentsProvider"
import { Comment } from "./Comment"
import "./Comment.css"


export const CommentList = (props) => {
    const { comments, getCommentsByPostId } = useContext(CommentContext)
    const postId = parseInt(props.match.params.postId)
    
    useEffect(() => {
        getCommentsByPostId(postId)
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