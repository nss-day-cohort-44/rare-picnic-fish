import React from "react"
import { Route } from "react-router-dom"
import {CategoryProvider} from "./category/categorydataprovider"
import {CategoryDashBoard}from "./category/categorydashboard"

export const ApplicationViews = () => {
    return (
    <>
        {/* <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        </main> */}
            <CategoryProvider>
            <Route exact path="/">
                <CategoryDashBoard {...props} />
            </Route>
            </CategoryProvider>

            <CategoryProvider>
            <Route exact path="/categories/create/:categoryId(\d+)" render={
                            props => <categoryform {...props} />
                        } />
            </CategoryProvider>
    </>
    )}
