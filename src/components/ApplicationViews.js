import React from "react"
import { Route } from "react-router-dom"
import {CategoryProvider} from "./category/CategoryDataProvider"
import {CategoryDashBoard}from "./category/CategoryDashBoard"
import {Categoryform} from "./category/CategoryForm"
import {CategoryDetail} from "./category/CategoryDetail"
import {CategoryEditForm} from "./category/CategoryEditForm"
import { PostForm } from "./posts/PostForm"
import { PostDetail } from "./posts/PostDetail"
import { PostList } from "./posts/PostList"
import { UserPostList } from "./posts/UserPostList.js"
import { PostProvider } from "./posts/PostProvider"
export const ApplicationViews = (props) => {
    return (
    <>
        {/* <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        </main> */}
            <PostProvider>
            <Route exact path="/">
                <PostList {...props} />
            </Route>
            <Route exact path="/posts/:postId(\d+)" render={
                props => <PostDetail {...props} />
            }>
            </Route>
            </PostProvider>
            <PostProvider>
            <Route exact path="/myPosts">
                <UserPostList {...props} />
            </Route>
            </PostProvider>
            <CategoryProvider>
            <Route exact path="/categories">
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

            <CategoryProvider>
            <Route exact path="/categories/edit/:categoryId(\d+)" render={
                props => <CategoryEditForm {...props} />
            }/>
            </CategoryProvider>

            <PostProvider>
                <Route path = "/newPost">
                    <PostForm {...props} />
                </Route>
            </PostProvider>
    </>
    )}
