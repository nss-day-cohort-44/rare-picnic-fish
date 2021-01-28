import React, { useContext, useRef, useEffect } from "react"
import {CategoryContext} from "./CategoryDataProvider"
import "./category.css"

export const Categoryform = (props) =>{
    const{addCategory,getCategory} = useContext(CategoryContext)

    const id = useRef(null)
    const Label =useRef(null)

    useEffect(() =>{
        getCategory()
    },[])

const ConstructNewCategory = () => {
    const CategoryLabel = Label.current.value
}

 if(CategoryLabel === ""){
    window.alert("please select a label") 
 }else{
    addCategory({
        label:CategoryLabel
    })
    .then(() => props.history.push("/"))
 }
}
return (
    <form className ="CategoryForm">
        
    </form>
)