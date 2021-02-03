import React, { useState, useEffect, useRef, useContext } from "react";
import { TagContext } from './TagProvider'
import { Multiselect } from 'multiselect-react-dropdown'



export const TagCheckList = (props) => {
    const { tags, getTags, addPostTag } = useContext(TagContext)
    const [selectedTags, setSelectedTags] = useState(tags)
    const postId = parseInt(props.match.params.postId)


    const handleControlledInputChange = (selectedTags) => {

        // Adding key value pairs to the object through each from input

        //    Without this only the last key value pair entered will send
        const newPostTag = selectedTags.map(st => {
            const newObject = Object.assign({}, st);
            newObject.post_id = postId
            return newObject
        })
        // newEvent[e.target.name] = e.target.value
        setSelectedTags(newPostTag)
    }
    console.log("selectedTags", selectedTags)

    useEffect(() => {

        getTags()

    }, [])

    useEffect(() => {

    }, [selectedTags])

    const constructPostTags = () => addPostTag(selectedTags)

    return (
        <form>
            <Multiselect defaultValue={[]} name="tags" options={tags} displayValue="label" className="basic-multi-select"
                classNamePrefix="select" placeholder="Select Tags" onSelect={handleControlledInputChange} />

            <button type="submit" bsPrefix="form-button"
                onClick={evt => {
                    evt.preventDefault()
                    constructPostTags()
                }}
                className="btn btn-primary">
                Save Tags
            </button>
        </form>
    )
}

