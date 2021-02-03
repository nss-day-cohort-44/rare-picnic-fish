import React from "react"
import { Link } from "react-router-dom"
import { Route,useHistory } from "react-router-dom"


// import { Link, useHistory } from "react-router-dom"

export const UserPost = ({ post }) => {
    const history = useHistory()
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
       
            <button className = "post__comment__btn"
                onClick={evt => {
                evt.preventDefault() // Prevent browser from submitting the form
                history.push(`/edit/comments/${post.id}`)
                 }}>
                 Edit Post
            </button>
                {/* <h3 className="post__name">
                    <Link to={`/posts/${post.id}`}>
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
                </button> */}
            </section>
        )
    } else return null 
}

