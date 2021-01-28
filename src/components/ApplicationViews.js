import React from "react"
import { Route } from "react-router-dom"
import {CategoryProvider} from "./category/CategoryDataProvider"
import {CategoryDashBoard}from "./category/CategoryDashBoard"
import {Categoryform} from "./category/CategoryForm"
import {CategoryDetail} from "./category/CategoryDetail"
export const ApplicationViews = (props) => {
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
            <Route exact path="/category/create" render={
                    props => <Categoryform {...props} />
                        } />
            </CategoryProvider>

            <CategoryProvider>
            <Route exact path="/categories/:categoryId(\d+)" render={
                props => <CategoryDetail {...props} />
            }/>
            </CategoryProvider>
    </>
    )}
