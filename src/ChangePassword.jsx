
import { useState } from "react";

function ChangePassword() {
  const [userId, setUserId] = useState('');
  const [oldPwd, setOldPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');



  const validNewPassword =
    newPwd.length >= 8 &&
    newPwd.length <= 16 &&
    /[A-Z]/.test(newPwd) &&
    /[a-z]/.test(newPwd) &&
    /[0-9]/.test(newPwd) &&
    /[!@#$%^&*]/.test(newPwd);


const handleChangePassword = async () => {
  if (!newPwd || !confirmPwd) {
    alert("All fields required");
    return;
  }

  if (newPwd !== confirmPwd) {
    alert("Passwords do not match");
    return;
  }

  try {
    const res = await fetch("http://localhost:8081/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,        // REQUIRED
        newPassword: newPwd    // REQUIRED
      }),
    });

    const msg = await res.text();
    alert(msg);

  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};







  return (
    <div className="container mt-5 p-4 bg-light border rounded">
      <h2 className="text-primary mb-3">Change Password</h2>

      <form>
      
<label className="mb-2 text-muted">User ID:</label>
      <input
        type="text"
        placeholder="User ID"
         style={{ display: "block", border: "2px solid red" }}
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
</form>

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
