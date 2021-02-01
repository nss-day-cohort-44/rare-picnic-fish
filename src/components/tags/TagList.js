import React, {useContext, useEffect, useState} from 'react'
import { TagContext } from './TagProvider'
import { Tag } from './Tag'

export const TagList = ({props}) => {
    const { tags, getTags} = useContext(TagContext)

    useEffect(() => {
        getTags()
        
    }, [])
    
    const sortedTags = tags.sort((a,b)=>(a.label > b.label) ? 1 : -1)

    return (
        <>
            <section className="tags">
                <div>
                    {
                        sortedTags.map( t => {
                            return <Tag key={t.id} tag={t} />
                        } )
                    }
                </div>
            </section>
        </>
    )
}