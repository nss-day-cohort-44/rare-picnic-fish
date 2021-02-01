import React,{ useContext, useEffect,useState } from "react"
import {CategoryContext} from "./CategoryDataProvider"
import { Route,useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

export const CategoryCard = ({category}) =>{
    const history = useHistory()
return(
    <>
    <section className="categories">
    <h3>
    <Link to={`/categories/${category.id}`}>
         {category.label}
     </Link> </h3>

    <section className="button1">
    <button  variant="primary" size="sm" onClick={() => 
     history.push(`/categories/edit/${category.id}`)}>
    Edit Category
   </button> 
   </section>
    </section>
    </>
)
}