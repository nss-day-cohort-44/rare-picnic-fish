import React,{useContext, useEffect,useState} from "react"
import {CategoryContext} from "./CategoryDataProvider"
import { Route,useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

export const CategoryDashBoard = (props) => {
    const{category,getCategory} = useContext(CategoryContext)

    const[Category,setCategory] = useState({})
    
    const history = useHistory()

useEffect(() =>{
    getCategory()
 },[])

 //  For finding the Category name
//  useEffect(() => {
//     const findCategory = category.find(a => a.id === parseInt(props.match.history.categoryId))|| {}
//     setCategory(findCategory)
//         },[Category])


console.log(category)
return (
    <>
    <section className="users">
    <h2>Categories</h2>
    {
       category.map(C =>{
           console.log(C)
        return <Link key={C.id} to={`/categories/${C.id}`}>
            <h3>{C.label}</h3>
        </Link>
       }) 
    }

<section className="button1">
    <button  variant="primary" size="sm" onClick={() => 
        props.history.push(`/categories/edit/${Category.id}`)}>
    Edit Category
   </button> 
   </section>
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

