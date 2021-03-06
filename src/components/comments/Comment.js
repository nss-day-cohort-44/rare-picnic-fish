import React from "react"
import "./Comment.css"

export const Comment = ({ comment }) => (
    <section className="comment">
        <div className="comment__subject">{ comment.subject }</div>
        <div className="comment__content">{ comment.content }</div>
    </section>
)