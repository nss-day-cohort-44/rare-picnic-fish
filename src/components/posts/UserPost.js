import React from "react"
import { Link } from "react-router-dom"



export const UserPost = ({ post }) => {
    // console.log(post)
    if(post.user_id ==localStorage.getItem("rare_user_id")){
        return(
            <section className="post">
        <h3 className="post__name">
            <Link to={`/posts/${post.id}`}>
                {post.title}
            </Link>
        </h3>
        <div className="post__title"><b>{post.category.label}</b></div>
        <div className="post__title">AUTHOR-{post.user.username}</div>
        </section>
        )
    } else return null 
}