import React,{useContext, useEffect,useState} from "react"
import { Link } from "react-router-dom"
import {CategoryContext} from "./CategoryDataProvider"

export const CategoryDashBoard = (props) => {
    const{category,getCategory} = useContext(CategoryContext)
}

useEffect(() =>{
    getCategory()
 },[])



return (
    <>
<section className="categories">
<h3 className="kiduser__name">Create a New Category:</h3>

<section className="button1">
<Button  variant="primary" size="sm" onClick={() => props.history.push(`/categories/create/${props.category.id}`)}>
Create Category
</Button> 
</section>
</section>
</>
)