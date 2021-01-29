import React, { useContext, useRef, useEffect,useState } from "react"
import {CategoryContext} from "./CategoryDataProvider"
import { Route,useHistory } from "react-router-dom"
import "./category.css"

export const CategoryEditForm = (props) =>{
    const{category,getCategory,updateCategory} = useContext(CategoryContext)

    const[Category,setcategory] = useState({})

    const editMode = props.match.params.hasOwnProperty("categoryId")

const handleControlledInputChange = (label) => {
    const newCategory = Object.assign({}, Category)
    newCategory[label.target.name] = label.target.value
    setcategory(newCategory)
    }

    const getCategoryInEditMode = () => {

        const categoryId = parseInt(props.match.params.categoryId)
        const selectedCategory = category.find(a => a.id === categoryId) || {}
        setcategory(selectedCategory)
    }
    useEffect(() =>{
        getCategory()
    },[])

    useEffect(() =>{
        getCategoryInEditMode()
    },[category])

const constructNewCategory = () => {
    const categoryId = parseInt(props.match.params.categoryId)
    if(categoryId === 0){
        window.alert("please select a Label" )
    }else{
        updateCategory({
            label:category.label
        })
        .then(() => props.history.push("/"))
    }}

return (
    <form className ="CategoryForm">
    <h2 className="userForm__title">Add New Category</h2>
    <fieldset>
            <div className="form-group">
                <label htmlFor="categoryName">Category label: </label>
                <input type="text" id="categoryName" required autoFocus className="form-control"
                placeholder="Category label" value={category.label} onChange={handleControlledInputChange} />
            </div>
    </fieldset>

    <section className="button">
        <button type="submit" className="button" 
            onClick={evt => {
                evt.preventDefault() // Prevent browser from submitting the form
                constructNewCategory()
            }}
            className="btn btn-primary">
            Save Category
        </button>
        </section>
    </form>
)}
    