import React,{useContext, useEffect,useState} from "react"
import {CategoryContext} from "./CategoryDataProvider"
import { Route,useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

export const CategoryDashBoard = () => {
    const{category,getCategory} = useContext(CategoryContext)
    
    const history = useHistory()

useEffect(() =>{
    getCategory()
 },[])


console.log(category)
return (
    <>
    <h2>Categories</h2>
    {
       category.map(C =>{
           console.log(C)
        return <Link key={C.id} to={`/categories/${C.id}`}>
            <h3>{C.label}</h3>
        </Link>
       }) 
    }
<section className="categories">
<h3 className="kiduser__name">Create a New Category:</h3>

<section className="button1">
<button  variant="primary" size="sm" onClick={() =>history.push("/category/create")}>
Create Category
</button> 
</section>
</section>
</>
)}