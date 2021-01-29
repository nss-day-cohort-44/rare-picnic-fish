import React, { useContext, useEffect } from "react"
import { CommentContext } from "./CommentsProvider"
import Comment from "./Comment"


export const CommentList = (props) => {
    const { comments, getComments } = useContext(CommentContext)

    useEffect(() => {
        getComments()
    }, [])

    return (
        <>
            <h1>Comments</h1>

            {/* <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button> */}
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