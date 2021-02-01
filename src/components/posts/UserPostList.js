import React,{useContext, useEffect,useState} from "react"
import {PostContext} from "./PostProvider.js"
import { useHistory, Link } from "react-router-dom"
import { UserPost } from "./UserPost.js"
import "./Post.css"

export const UserPostList = () => {
    const{posts,getPosts} = useContext(PostContext)
    
    const history = useHistory()

useEffect(() =>{
    getPosts()
 },[])
// if(posts.user_id !==""){
//     console.log("working")
// }else console.log("not working")
// console.log(posts)
    return (
        <div className="userPosts">
        {
            posts.map(p => <UserPost key={p.user.id} post={p} />)
        }
        </div>
    )
}