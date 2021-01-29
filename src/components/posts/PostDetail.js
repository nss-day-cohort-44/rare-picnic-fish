import React, { useContext, useEffect, useState } from "react"
// import { PostContext } from "./PostProvider"

export const PostDetail = (props) => {
    const { getPostById } = useContext(PostContext)

    const [post, setPost] = useState({ location: {}, customer: {}})

    useEffect(() => {
        const postId = parseInt(props.match.params.postId)
        getPostById(postId)
            .then(setPost)
    }, [])

    return (
        <>
            <section className="post">
                <h3 className="post__title">{post.title}</h3>
                <div className="post__publication-date">Published On: {post.publicationDate}</div>
                <div className="post__image-url">{post.imageUrl}</div>
                <div className="post__content">{post.content}</div>
                <div className="post__approved">{post.approved}</div>
            </section>
        </>
    )
}