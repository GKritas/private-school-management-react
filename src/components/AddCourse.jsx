import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function AddCourseForm() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [duration, setDuration] = useState('');
    const [fee, setFee] = useState('');




    const handleSubmit = (event) => {
        event.preventDefault();
        const newCourse = {
            name,
            description,
            startDate,
            endDate,
            duration,
            fee
        };
        axios.post('http://localhost:8080/api/courses', newCourse)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        navigate('/courses')
    }

    return (
        <div>
            <Header />
            <h1>Add Course</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" required value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea className="form-control" id="description" required value={description} onChange={(event) => setDescription(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date" className="form-control" id="startDate" required value={startDate} onChange={(event) => setStartDate(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">End Date:</label>
                    <input type="date" className="form-control" id="endDate" required value={endDate} onChange={(event) => setEndDate(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration (in weeks):</label>
                    <input type="number" className="form-control" id="duration" required value={duration} onChange={(event) => setDuration(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="fee">Fee (in dollars):</label>
                    <input type="number" className="form-control" id="fee" required value={fee} onChange={(event) => setFee(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Add Course</button>
            </form>
        </div>
    );
}

export default AddCourseForm;
