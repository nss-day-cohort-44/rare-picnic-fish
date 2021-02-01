import React from "react"
import { Link } from "react-router-dom"

export const Post = ({ post }) => (
    <section className="post">
        <h3 className="post__name">
            <Link to={(localStorage.getItem("rare_user_id") === null) ?
                "/login":`/posts/${post.id}`}>
                {post.title}
            </Link>
        </h3>
        <div className="post__title"><b>{post.category.label}</b></div>
        <div className="post__title">AUTHOR-{post.user.username}</div>
        <button className = "post__comment__btn">
            View Comments
        </button>
    </section>
)