import React, { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"

export const Post = ({ post }) => { 
    const history = useHistory()

    return ( 
        <section className="post">
            <h3 className="post__name">
                <Link to={(localStorage.getItem("rare_user_id") === null) ?
                    "/login":`/posts/${post.id}`}>
                    {post.title}
                </Link>
            </h3>
            <div className="post__title"><b>{post.category.label}</b></div>
            <div className="post__title">AUTHOR-{post.user.username}</div>
            <button className = "post__comment__btn"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    history.push(`/comments/${post.id}`)
                }}>
                View Comments
            </button>

            <button className = "post__comment__btn"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    history.push(`/edit/comments/${post.id}`)
                }}>
                Edit Post
            </button>
        </section>
    )
}