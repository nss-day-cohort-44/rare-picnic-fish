import React, { useContext, useRef, useEffect } from "react"
import {CategoryContext} from "./CategoryDataProvider"
import { Route,useHistory } from "react-router-dom"
import "./category.css"


export const Categoryform = (props) =>{
    const{addCategory,getCategory} = useContext(CategoryContext)

    const label =useRef(null)

    useEffect(() =>{
        getCategory()
    },[])

    const history = useHistory()

const contructNewLabel =() => {
if(label === ""){
    window.alert("please select a label") 
 }else{
    addCategory({
        label:label.current.value
    })
    .then(() => props.history.push("/categories"))
 }
}
return (
    <form className ="CategoryForm">
    <h2 className="userForm__title">Add New Category</h2>
    <fieldset>
            <div className="form-group">
                <label htmlFor="categoryName">Category label: </label>
                <input type="text" id="categoryName" ref={label} required autoFocus className="form-control"
                placeholder="Category label" />
            </div>
        </fieldset>

        <section className="button">
           <button type="submit" className="button" 
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    contructNewLabel()
                }}
                className="btn btn-primary">
                Create Category
            </button>
            </section>
            </form> 
)}

