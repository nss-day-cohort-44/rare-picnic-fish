import React, { useContext, useRef, useEffect,useState } from "react"
import {PostContext} from "./PostProvider"
import "./Post.css"

export const PostEditForm = (props) => {
const{posts,getPosts,updatePost} = useContext(PostContext)

 const[Post,setPosts] = useState({})

 const editMode = props.match.params.hasOwnProperty("postId")

 const handleControlledInputChange = (event) => {
    const newPost = Object.assign({}, Post)
    newPost[event.target.name] = event.target.value
    setPosts(newPost)
    }

const getCategoryInEditMode = () => {
    if (editMode){
    const postId = parseInt(props.match.params.postId)
    const selectedPost = posts.find(a => a.id === postId) || {}
    setPosts(selectedPost)}
}
 useEffect(() =>{
    getPosts()
 },[])

 useEffect(() =>{
    getCategoryInEditMode()
 },[posts])

 const constructNewPost = () =>{
     const postId =  parseInt(props.match.params.postId)

    if(postId === 0){
        window.alert("please select the post")
    }else{
        if(editMode){
            updatePost ({
                user_id : Post.user_id,
                categoryId: Post.categoryId,
                title: Post.title,
                content: Post.content,
                imageUrl: Post.imageUrl,
                publicationDate:Post.publicationDate,
                approved: Post.approved
            })
            .then(() => props.history.push("/myPosts"))
    }}
 }

 return(
    <form className ="PostForm">
    <h2 className="postForm__title">Update Category</h2>
    <fieldset>
            <div className="form-group">
                <label htmlFor="postName">Category: </label>
                <input type="text" name="categoryId" id="postName" required autoFocus className="form-control"
                placeholder="Category" value={Post.categoryId} onChange={handleControlledInputChange}  />
            </div>
    </fieldset>

    <fieldset>
            <div className="form-group">
                <label htmlFor="postName">Post Title: </label>
                <input type="text" name="title" id="postName" 
                placeholder="Title" value={Post.title} onChange={handleControlledInputChange}  />
            </div>
    </fieldset>
  
    <fieldset>
            <div className="form-group">
                <label htmlFor="postName">Post Content: </label>
                <input type="text" name="content" id="postName" 
                placeholder="Content" value={Post.content} onChange={handleControlledInputChange}  />
            </div>
    </fieldset>

    <fieldset>
            <div className="form-group">
                <label htmlFor="postName">Post Image Url: </label>
                <input type="url" name="imageUrl" id="postName" 
                placeholder="Image" value={Post.imageUrl} onChange={handleControlledInputChange}  />
            </div>
    </fieldset>
    <section className="button">
        <button type="submit" className="button" 
            onClick={evt => {
                evt.preventDefault() // Prevent browser from submitting the form
                constructNewPost()
            }}
            className="btn btn-primary">
            Save Post
        </button>

        <button type="submit" className="button" 
            onClick={() =>
                    props.history.push("/myPosts")}>
            Cancel
        </button>    
    </section>
</form>
 )}