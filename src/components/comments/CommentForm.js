import React, { useContext, useRef } from "react"
import { CommentContext } from "./CommentsProvider"
import "./Comment.css"

export const CommentForm = () => {
    const { addComment } = useContext(CommentContext)
    const content = useRef("")
    const subject = useRef("")


    const createNewComment = (props) => {
        const userId = parseInt(localStorage.getItem(''))

        if (content === "" || subject === "") {
            window.alert("Please fill out all fields")
        }
        else {
            addComment({
                content: content.current.value,
                subject: subject.current.value,
            }).then(() => props.history.push("/"))
            // COME BACK TO THIS. MUST PUSH TO SOMEWHERE CURRENTLY UNDEFINED
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
                    <input type="text" id="commentSubject" ref={subject}/>
                </fieldset>
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()
                        createNewComment(props)
                    }}
                    className="commentForm_btn">Comment</button>
            </form>
        </div>
    )
}
