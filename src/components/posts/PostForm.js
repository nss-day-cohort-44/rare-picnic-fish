import React, { useContext, useEffect, useRef } from "react";
import { PostContext } from "./PostProvider"

export const PostForm = (props) => {
    const { getPosts, addPost} = useContext(PostContext)

    const title = useRef(null)
    const imageUrl = useRef(null)
    const content = useRef(null)

    useEffect(() => {
        getPosts()
    }, [])
    
    const addNewPost = () => {
        addPost({ 
            title,
            publicationDate: Date.now(),
            imageUrl,
            content
        })
        .then(() => props.history.push("/myPost"))
    }
    return (
        
        <form className="PostForm">
            <h2 className="PostForm__title">Title</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Post-Title">Post Title: </label>
                    <input type="text" id="Post-Title" ref={title} required autoFocus className="form-control" placeholder="Post Title" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Post-Image"></label>
                    <input type="text" id="Post-Image" ref={imageUrl} required autoFocus className="form-control" placeholder="Image URL" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Post-Content">Post Content: </label>
                    <input type="text" id="Post-Content" ref={content} required autoFocus className="form-control" placeholder="Post Content" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    addNewPost()
                }}
                className="btn btn-primary">
                Save Post
            </button>
        </form>
        
    )
}