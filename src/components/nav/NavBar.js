import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import Logo from "./rare.jpeg"

export const NavBar = () => {
    const history = useHistory()
    if (localStorage.getItem("rare_user_id") !== null){
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <img className="navbar__logo" src={Logo} />
            </li>
            <li className="navbar__item">
                <Link className="navbar__link"  to={(localStorage.getItem("rare_user_id") === null) ?
                "/login":"/"}>All Posts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link"  to={(localStorage.getItem("rare_user_id") === null) ?
                "/login":"/myPosts"}>My Posts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link"  to={(localStorage.getItem("rare_user_id") === null) ?
                "/login":"/categories"}>Category Manager</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link"  to={(localStorage.getItem("rare_user_id") === null) ?
                "/login":"/tags"}>Tag Manager</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link"  to={(localStorage.getItem("rare_user_id") === null) ?
                "/login":"/newPost"}>New Post</Link>
            </li>
            <li className="navbar__item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("rare_user_id")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li>
            </ul>
            )
    }else return (
        <ul className="navbar">
            <li className="navbar__item">
                <img className="navbar__logo" src={Logo} />
            </li>
            <li className="navbar__item">
                <Link className="navbar__link"  to={(localStorage.getItem("rare_user_id") === null) ?
                "/login":"/"}>"All Posts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/login">Login</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/register">Register</Link>
            </li>
            </ul>
        )}
