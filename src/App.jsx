
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './Login.jsx';
import Success from './Login.jsx';
import ForgotPassword from './ForgotPassword.jsx';
import ChangePassword from './ChangePassword.jsx';
/*import Register from './App.jsx';*/

/*import App from './App.jsx';*/


function Register() {
  const navigate = useNavigate();

  const [pet, setPet] = useState('');
const [color, setColor] = useState('');
const [friend, setFriend] = useState('');
 const [userId, setUserId] = useState('');
  const [pwd, setPwd] = useState('');
  const [dob, setDob] = useState(null);
  const [last, setLast] = useState(null);
  const [exp, setExp] = useState(null);

  const valid =
    pwd.length >= 8 &&
    pwd.length <= 16 &&
    /[A-Z]/.test(pwd) &&
    /[a-z]/.test(pwd) &&
    /[0-9]/.test(pwd) &&
    /[!@#$%^&*]/.test(pwd);

  const setPassword = () => {
    const now = new Date();
    const expiry = new Date(now.getTime() + 5 * 60 * 1000);
    setLast(now);
    setExp(expiry);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (valid) {
      navigate('/Success');
    } else {
      alert('Please eter a valid password before submitting the form.');
    }
      if (valid) {
        localStorage.setItem("userId", userId.trim());
    localStorage.setItem("password", pwd.trim());
    localStorage.setItem("pet", pet);
    localStorage.setItem("color", color);
    localStorage.setItem("friend", friend);

    navigate('/Success');
  } else {
    alert('Please enter a valid password');
  }
  };
  return (

   <div className="container mt-5 p-4 bg-light border rounded">
        <h1 className="text-primary mb-4">REGISTRATION FORM</h1>
        <br />

        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label>User ID</label>
            <br />

            <input type="text" placeholder="Enter User ID" onChange={(e)=> setUserId(e.target.value)}/>
          </div>
          <br />

          <div className='mb-3'>
            <label>User Name</label>
            <br />
            <input type="text" placeholder="Enter User Name" />
          </div>
          <br />

          <div className='mb-3'>
            <label>Date Of Birth</label>
            <br />
            <DatePicker
              selected={dob}
              onChange={(date) => setDob(date)}
              placeholderText="Select Date" />
            {dob && <p>You selected: {dob.toDateString()}</p>}
          </div>
          <br />
          <div className='mb-3'>
            <label>Enter your password</label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPwd(e.target.value)} />

            {!valid && pwd && <p style={{ color: 'red' }}>Invalid Password</p>}
            {valid && <p style={{ color: 'green' }}>Valid Password</p>}
          </div>
          <br />

          <div className='mb-3'>
            <label>What is your pet name?</label>
            <br />
            <input type="text" placeholder="Enter your pet name"  onChange={(e) => setPet(e.target.value)} />
            <br />

            <label>What is your favourite color?</label>
            <br />
            <input type="text" placeholder="Enter your favourite color"   onChange={(e) => setColor(e.target.value)}  />
            <br />

            <label>What is your best friend name?</label>
            <br />
            <input type="text" placeholder="Enter your best friend name" onChange={(e) => setFriend(e.target.value)} />
            <br />
          </div>
          <div className='mb-3'>
            <label>Password Expiry Date</label>
            <br />
            <button type="button" onClick={setPassword}>
              Set Password
              <br />
            </button>

            {last && (
              <p>
                Last: {last.toLocaleTimeString()} | Expiry: {exp.toLocaleTimeString()}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
  );
}
/*export default Register;*/
function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Success" element={<Success />} />
         <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/change" element={<ChangePassword />} />
    </Routes>
  );
}
export default App;