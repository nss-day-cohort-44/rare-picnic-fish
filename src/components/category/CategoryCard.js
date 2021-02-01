import React,{ useContext, useEffect,useState,Component} from "react"
import {CategoryContext} from "./CategoryDataProvider"
import { Route,useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

export const CategoryCard  = ({category}) =>{
    const{getCategory,deleteCategory} = useContext(CategoryContext)
    const history = useHistory()

    useEffect(() =>{
        getCategory()
    },[])

    const DeleteCategory = ()=>{
        let txt= window.confirm("Are you sure you want to delete")

        if(txt){
            deleteCategory(category.id)
            history.push(`/categories`)
          } else {
    
        }
    }



return(
    <>
    <section className="categories">   
    <Link to={`/categories/${category.id}`}>
         {category.label}
     </Link>

    <section className="button1">
    <button  variant="primary" size="sm" onClick={() => 
     history.push(`/categories/edit/${category.id}`)}>
    Edit Category
   </button> 

 {/* Window.alert for Delete button */}
   <button  variant="primary" size="sm" onClick={() => { 
         DeleteCategory()  
     }}>
    Delete Category
   </button> 
   </section>
    </section>
    </>
)
}