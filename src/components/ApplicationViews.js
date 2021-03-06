import React from "react"
import { Route } from "react-router-dom"
import { CategoryProvider } from "./category/CategoryDataProvider"
import { CategoryDashBoard } from "./category/CategoryDashBoard"
import { Categoryform } from "./category/CategoryForm"
import { CategoryDetail } from "./category/CategoryDetail"
import { CategoryEditForm } from "./category/CategoryEditForm"
import { PostForm } from "./posts/PostForm"
import { PostDetail } from "./posts/PostDetail"
import { PostList } from "./posts/PostList"
import {PostEditForm} from "./posts/PostEditForm"
import { UserPostList } from "./posts/UserPostList.js"
import { PostProvider } from "./posts/PostProvider"
import { CommentsProvider } from "./comments/CommentsProvider"
import { CommentList } from "./comments/CommentList"
import { CommentForm } from "./comments/CommentForm"
import { TagProvider } from './tags/TagProvider'
import { TagList } from './tags/TagList'
import { TagForm } from './tags/TagForm'
import { TagCheckList } from "./tags/TagCheckList"



export const ApplicationViews = (props) => {
    return (
        <>
            {/* <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        </main> */}
            <PostProvider>
                <TagProvider>

                    <Route exact path="/">
                        <PostList />
                    </Route>
                    <Route exact path="/myPosts" render={
                        props => <UserPostList {...props} />
                    } />
                    <Route exact path="/newPost">
                        <PostForm {...props} />
                    </Route>
                    <Route exact path="/">
                        <PostList />
                    </Route>
                    <Route exact path="/posts/:postId(\d+)" render={
                        props => <>
                            <PostDetail {...props} />
                            <TagCheckList {...props} />
                        </>
                    }>
                    </Route>
                    <Route exact path="/myPosts" render={
                        props => <UserPostList {...props} />
                    } />

                </TagProvider>
            </PostProvider>
            <CategoryProvider>

                <Route exact path="/categories">
                    <CategoryDashBoard {...props} />
                </Route>
                <Route exact path="/category/create" render={
                    props => <Categoryform {...props} />
                } />
                <Route exact path="/categories/:categoryId(\d+)" render={
                    props => <CategoryDetail {...props} />
                } />
                <Route exact path="/categories/edit/:categoryId(\d+)" render={
                    props => <CategoryEditForm {...props} />
                } />

            </CategoryProvider>
            <TagProvider>

                <Route exact path="/tags" render={
                    props => <TagForm {...props} />
                } />
                <Route exact path="/tags" render={
                    props => <TagList {...props} />
                } />
            </TagProvider>

            <PostProvider>
                <CommentsProvider>

                    <Route exact path="/comments/:postId(\d+)" render={
                        props => <CommentList {...props} />
                    } />

                    <Route path="/comments/:postId(\d+)" render={
                        props => <CommentForm {...props} />
                    }/>

                    <Route path = "/edit/comments/:postId(\d+)" render = {
                        props => <PostEditForm {...props} />
                    }/> 
                </CommentsProvider>
            </PostProvider>
        </>
    )
}

