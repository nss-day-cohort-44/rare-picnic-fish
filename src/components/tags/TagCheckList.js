import React, { useState, useEffect, useRef, useContext } from "react";
import { TagContext } from './TagProvider'
import { Multiselect } from 'multiselect-react-dropdown'
import { PostContext } from "../posts/PostProvider";




export const TagCheckList = (props) => {
    const { tags, getTags, addPostTag } = useContext(TagContext)
    const {posts, getPosts} = useContext(PostContext)
    const [selectedTags, setSelectedTags] = useState(tags)
    const propPostId = parseInt(props.match.params.postId)

    // console.log("props", props)
    const handleControlledInputChange = (selectedTags) => {

        // Adding key value pairs to the object through each from input

        //    Without this only the last key value pair entered will send
        const newPostTag = selectedTags.map(st => {
            const newObject = Object.assign({}, st);
            newObject.postId = propPostId
            return newObject
        })
        // newEvent[e.target.name] = e.target.value
        setSelectedTags(newPostTag)
    }
    console.log("selectedTags", selectedTags)

    useEffect(() => {

        getTags()
        .then(getPosts)

    }, [])

    useEffect(() => {

    }, [selectedTags])

    selectedTags.map(st => delete st.label)


    const activeUserId = parseInt(localStorage.getItem("rare_user_id"))
    
    const constructPostTags = () => addPostTag(selectedTags)
    // const activeUser = posts.map(p => {p.user_id === activeUserId)
    
    // if (activeUser.id === localStorage.getItem("rare_user_id")) {

        return (
            <form>
                <Multiselect defaultValue={[]} name="tags" options={tags} displayValue="label" className="basic-multi-select"
                    classNamePrefix="select" placeholder="Select Tags" onSelect={handleControlledInputChange} />

                <button type="submit" type="button"
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
//     else {
//         return null
//     }
// }