import React, { useState } from "react"

export const AnimalContext = React.createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        return fetch("http://localhost:8088/posts")
        .then(res => res.json())
           .then(setPosts)
    }

    const getPostById = (id) => {
       return fetch(`http://localhost:8088/posts/${ id }`)
           .then(res => res.json())
   }

    const addPost = post => {
        return fetch("http://localhost:8088/posts" {
        method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(getPosts)
    }

   return (
    <PostContext.Provider value={{
        posts, getPosts, getPostById, addPost
    }}>
        {props.children}
    </PostContext.Provider>
)
}