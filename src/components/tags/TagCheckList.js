import React, { useState, useEffect, useRef, useContext } from "react";
import { TagContext } from './TagProvider'
import { Multiselect } from 'multiselect-react-dropdown'



export const TagCheckList = () => {
    const { tags, getTags } = useContext(TagContext)
    const [selectedOptions, setSelectionOptions] = useState(tags)
    
    
    useEffect(() => {
        
        getTags()
        
    }, [])
    

    return (
        <Multiselect
            defaultValue={[]}
            name="tags"
            options={tags}
            displayValue = "label"
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select Tags"
        />
    )
}

    // const handleQueryChange = event => {
    //     if (event.target.checked && !query.includes(event.target.value)) {
    //         setQuery([...query, event.target.value]);
    //     } else if (!event.target.checked && query.includes(event.target.value)) {
    //         setQuery(query.filter(q => q !== event.target.value))
