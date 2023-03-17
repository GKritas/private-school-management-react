import { useState } from "react";
import './CourseForm.css';
import React from 'react'
import { updateCourseApi, createCourseApi } from "../api/CourseApiService";

const CourseForm = ({ course, handleCloseForm, refreshTable }) => {

    const [name, setName] = useState(course ? course.name : '');
    const [description, setDescription] = useState(course ? course.description : '');
    const [startDate, setStartDate] = useState(course ? course.startDate : '');
    const [endDate, setEndDate] = useState(course ? course.endDate : '');
    const [fee, setFee] = useState(course ? course.fee : '');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCourse = {
            name,
            description,
            startDate,
            endDate,
            duration : calculateDuration(),
            fee
        };
        if (course) {
            updateCourseApi(course._links.self.href, newCourse)
                .then(() => {
                    handleCloseForm();
                    refreshTable();
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            createCourseApi(newCourse)
                .then(() => {
                    handleCloseForm();
                    refreshTable();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    const calculateDuration = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diff = Math.floor((end - start) / (1000 * 60 * 60 * 24));
        return diff;
    }

    return (
        <form className="course-form" onSubmit={handleSubmit}>
            <h2>{course ? 'Update Course' : 'Add Course'}</h2>
            <button className="close-button" onClick={handleCloseForm}>X</button>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required minLength={5}/>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required minLength={10}/>
            </div>
            <div>
                <label htmlFor="start-date">Start Date:</label>
                <input type="date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required min={new Date().toISOString().split('T')[0]}/>
            </div>
            <div>
                <label htmlFor="end-date">End Date:</label>
                <input type="date" id="end-date" value={endDate} onChange={(e) => setEndDate(e.target.value)} min={startDate}/>
            </div>
            <div>
                <label htmlFor="fee">Fee:</label>
                <input type="number" id="fee" value={fee} onChange={(e) => setFee(e.target.value)} min={0}/>
            </div>
            <button type="submit">{course ? 'Update' : 'Add'}</button>
        </form>
    );
}

export default CourseForm