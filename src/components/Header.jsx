import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/menu">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/menu">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/courses">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/students">Students</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/trainers">Trainers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/assignments">Assignments</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Search"/>
                            <button className="btn btn-primary" type="button">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header