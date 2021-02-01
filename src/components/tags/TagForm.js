import React, { useContext, useRef, useEffect, useState } from "react"
import { TagContext } from './TagProvider'

export const TagForm = (props) => {

    const { tags, addTag, getTags } = useContext(TagContext)
    const [ newTag, setNewTag ] = useState("")

    const label = useRef(null)

    useEffect(() => {

        getTags()

    }, [])

    useEffect(() => {




    }, [tags])

    const constructNewTag = () => {

        const tagName = label.current.value
        setNewTag(tagName)
        if (newTag === "") {
            window.alert("Please enter a label")

        } 
        else {

        addTag(
            {
                label: newTag
            })
            .then(() => props.history.push("/tags"))
        }
    }

    return (
        <form className="tagForm">
            <h2 className="tagForm__title">New Tag</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="tagName">Tag name: </label>
                    <input type="text" id="tagName" ref={label} required autoFocus className="form-control" placeholder="tag name" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewTag()
                }}
                className="btn btn-primary">
                Save Tag
        </button>
        </form>
    )
}