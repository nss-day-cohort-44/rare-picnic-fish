import React, { useState } from "react"
import "./category.css"
export const CategoryContext = React.createContext()

export const CategoryProvider =(props) =>{
    const[category,setcategory] = useState([])

const getCategory = () =>{
    return fetch ("http://localhost:8088/categories")
    .then(res => res.json())
    .then(setcategory)
}

const addCategory = (categories) =>{
    return fetch("http://localhost:8088/categories", {
        method:"POST",
        headers : {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(categories)
    })
    .then(getCategory)
}


return(
    <CategoryContext.Provider value = {{
        category,getCategory,addCategory
            }}>
        {props.children}
    </CategoryContext.Provider>
)}
