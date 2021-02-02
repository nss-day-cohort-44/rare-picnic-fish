import React, { useContext, useEffect, useRef } from "react"
import { CommentContext } from "./CommentsProvider"
import "./Comment.css"

export const CommentForm = (props) => {
    const { comments, addComment, getCommentsByPostId } = useContext(CommentContext)
    const content = useRef("")
    const subject = useRef("")

    const postId = parseInt(props.match.params.postId)

    useEffect(() => {
        getCommentsByPostId(postId)
    }, [])


    const createNewComment = (props) => {
        const userId = parseInt(localStorage.getItem(''))

        if (content === "" || subject === "") {
            window.alert("Please fill out all fields")
        }
        else { 
            return addComment({
                postId: parseInt(props.match.params.postId),
                authorId: localStorage.getItem("rare_user_id"),
                subject: subject.current.value,
                content: content.current.value,
                createdOn: Date.now()
            })
        }
    }

    return (
        <div className="commentForm_container">
            <form className="commentForm">
                <div className="commentForm__title">
                    <h3>Leave a Comment</h3>
                </div>
                <fieldset className="commentForm__subject">
                    <label htmlFor="commentSubject">Subject: </label>
                    <input type="text" id="commentSubject" ref={subject}/>
                </fieldset>
                <fieldset className="commentForm__content">
                    <label htmlFor="commentContent">Content: </label>
                    <input type="text" id="commentSubject" ref={content}/>
                </fieldset>
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()
                        createNewComment(props).then(() => {
                            subject.current.value = ""
                            content.current.value = ""
                        }).then(() => getCommentsByPostId(postId))
                    }}
                    className="commentForm_btn">Comment</button>
            </form>
        </div>
    )
}
