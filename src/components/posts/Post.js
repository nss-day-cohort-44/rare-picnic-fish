import React from "react"
import { Link } from "react-router-dom"

export const Post = ({ post }) => (
    <section className="post">
        <h3 className="post__name">
            <Link to={`/posts/${post.id}`}>
                {post.title}
            </Link>
        </h3>
        <div className="post__title">{post.title}</div>
    </section>
)