import React,{useContext, useEffect,useState} from "react"
import {PostContext} from "./PostProvider.js"
import { useHistory, Link } from "react-router-dom"
import { Post } from "./Post.js"

export const PostList = () => {
    const{posts,getPosts} = useContext(PostContext)
    
    const history = useHistory()

useEffect(() =>{
    getPosts()
 },[])


return (
    <div className="posts">
    {
        posts.map(p => <Post key={p.id} post={p} />)
    }
    </div>
)}