import React,{useContext, useEffect,useState} from "react"
import {CategoryContext} from "./CategoryDataProvider"
import { Route,useHistory } from "react-router-dom"
import {CategoryCard} from "./CategoryCard"

export const CategoryDashBoard = () => {
    const{category,getCategory} = useContext(CategoryContext)
    
    const history = useHistory()

useEffect(() =>{
    getCategory()
 },[])



console.log(category)
return (
    <>
   <section className="users"> 
    <h2>Categories</h2>
    {
       category.map(C =>< CategoryCard key={C.id} category={C} />)
    }
</section>
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

