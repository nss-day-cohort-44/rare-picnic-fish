import React, { useState, useEffect, useRef, useContext } from "react";
import { TagContext } from './TagProvider'
import { Multiselect } from 'multiselect-react-dropdown'



export const TagCheckList = () => {
    const { tags, getTags } = useContext(TagContext)
    const [selectedTags, setSelectedTags] = useState(tags)

    console.log("tags", tags)


    useEffect(() => {

        getTags()

    }, [])
    console.log()

    const onSelect = (selectedTags) => {
        setSelectedTags(selectedTags)
        console.log("Selected Options", selectedTags)
    }

    return (
        <div>

            <Multiselect
                defaultValue={[]}
                name="tags"
                options={tags}
                displayValue="label"
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Select Tags"

                onSelect={onSelect}

            />
        </div>
    )
}

    // const handleQueryChange = event => {
    //     if (event.target.checked && !query.includes(event.target.value)) {
    //         setQuery([...query, event.target.value]);
    //     } else if (!event.target.checked && query.includes(event.target.value)) {
    //         setQuery(query.filter(q => q !== event.target.value))
