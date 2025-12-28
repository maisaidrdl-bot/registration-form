/*import { useState } from "react";

function ChangePassword({ userData, setUserData }) {
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = () => {
    if (oldPwd !== userData.password) {
      setMsg("❌ Old password incorrect");
      return;
    }

    if (newPwd.length < 8 || newPwd.length > 16) {
      setMsg("❌ Password must be 8–16 chars");
      return;
    }

    if (newPwd !== confirmPwd) {
      setMsg("❌ Passwords do not match");
      return;
    }

    const now = new Date();
    setUserData({
      ...userData,
      password: newPwd,
      lastChanged: now,
      expiry: new Date(now.getTime() + 5 * 60 * 1000),
    });

    setMsg("✅ Password changed");
  };

  return (
    <div className="container mt-5 p-4 glass-card">
      <h2>CHANGE PASSWORD</h2>

      <input className="form-control mb-3" value={userData.userId} readOnly />
      <input type="password" className="form-control mb-3" placeholder="Old Password" onChange={(e) => setOldPwd(e.target.value)} />
      <input type="password" className="form-control mb-3" placeholder="New Password" onChange={(e) => setNewPwd(e.target.value)} />
      <input type="password" className="form-control mb-3" placeholder="Confirm Password" onChange={(e) => setConfirmPwd(e.target.value)} />

      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default ChangePassword;

import { useState } from "react";

function ChangePassword() {
  const [oldPwd, setOldPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');

  const handleChange = () => {
    const storedPwd = localStorage.getItem("password");

    if (oldPwd === storedPwd) {
      localStorage.setItem("password", newPwd);
      alert("Password changed successfully ✅");
    } else {
      alert("Old password incorrect ❌");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Change Password</h3>

      <input type="password" placeholder="Old password"
             onChange={e => setOldPwd(e.target.value)} /><br />

      <input type="password" placeholder="New password"
             onChange={e => setNewPwd(e.target.value)} /><br />

      <button onClick={handleChange}>Change Password</button>
    </div>
  );
}

export default ChangePassword;
*/import { useState } from "react";

function ChangePassword() {
  const [userId, setUserId] = useState('');
  const [oldPwd, setOldPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  const storedUserId = localStorage.getItem("userId");
  const storedPwd = localStorage.getItem("password");

  const validNewPassword =
    newPwd.length >= 8 &&
    newPwd.length <= 16 &&
    /[A-Z]/.test(newPwd) &&
    /[a-z]/.test(newPwd) &&
    /[0-9]/.test(newPwd) &&
    /[!@#$%^&*]/.test(newPwd);

  const handleChangePassword = () => {
    if (!userId || !oldPwd || !newPwd || !confirmPwd) {
      alert("All fields are required");
      return;
    }

    if (userId !== storedUserId) {
      alert("User ID does not match");
      return;
    }

    if (oldPwd !== storedPwd) {
      alert("Old password is incorrect");
      return;
    }

    if (!validNewPassword) {
      alert("New password does not meet requirements");
      return;
    }

    if (newPwd === oldPwd) {
      alert("New password cannot be same as old password");
      return;
    }

    if (newPwd !== confirmPwd) {
      alert("Confirm password does not match");
      return;
    }

    localStorage.setItem("password", newPwd);
    alert("Password changed successfully ✅");

    setUserId('');
    setOldPwd('');
    setNewPwd('');
    setConfirmPwd('');
  };

  return (
    <div className="container mt-5 p-4 bg-light border rounded">
      <h2 className="text-primary mb-3">Change Password</h2>
      
<label className="mb-2 text-muted">User ID:</label>
      <input
        type="text"
        placeholder="User ID"
        className="form-control mb-2"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
<label className="mb-2 text-muted">Old Password:</label>
      <input
        type="password"
        placeholder="Old Password"
        className="form-control mb-2"
        value={oldPwd}
        onChange={(e) => setOldPwd(e.target.value)}
      />
<label className="mb-2 text-muted">New Password:</label>
      <input
        type="password"
        placeholder="New Password"
        className="form-control mb-2"
        value={newPwd}
        onChange={(e) => setNewPwd(e.target.value)}
      />
<label className="mb-2 text-muted">Confirm New Password:</label>
      <input
        type="password"
        placeholder="Confirm New Password"
        className="form-control mb-3"
        value={confirmPwd}
        onChange={(e) => setConfirmPwd(e.target.value)}
      />

      <button className="btn btn-success" onClick={handleChangePassword}>
        Change Password
      </button>

      <div className="mt-3">
        <small>
          Password must contain:
          <ul>
            <li>8–16 characters</li>
            <li>1 uppercase, 1 lowercase</li>
            <li>1 number</li>
            <li>1 special character</li>
          </ul>
        </small>
      </div>
    </div>
  );
}

export default ChangePassword;
