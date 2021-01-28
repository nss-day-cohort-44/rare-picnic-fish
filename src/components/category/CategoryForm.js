import React, { useContext, useRef, useEffect } from "react"
import {CategoryContext} from "./CategoryDataProvider"
import "./category.css"
import Button from 'react-bootstrap/Button'

export const Categoryform = (props) =>{
    const{addCategory,getCategory} = useContext(CategoryContext)

    const label =useRef(null)

    useEffect(() =>{
        getCategory()
    },[])

    const constructNewCategory = () => {
    const categoryLabel = label.current.value
}

 if(Label === ""){
    window.alert("please select a label") 
 }else{
    addCategory({
        label:categoryLabel
    })
    .then(() => props.history.push("/"))
 }
}
return (
    <form className ="CategoryForm">
    <h2 className="userForm__title">Add New Category</h2>
    <fieldset>
            <div className="form-group">
                <label htmlFor="categoryName">Category label: </label>
                <input type="text" id="categoryName" ref={Label} required autoFocus className="form-control"
                placeholder="Category label" />
            </div>
        </fieldset>

        <section className="button">
           <Button variant="primary" type="submit" className="button" 
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    ConstructNewCategory()
                }}
                className="btn btn-primary">
                Save Category
            </Button>
            </section>
            </form> 
)
