import { useState } from "react";

function Login() {
  const [mode, setMode] = useState("login"); // login | forgot | change
  const [loggedIn, setLoggedIn] = useState(false);

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // Forgot password
  const [pet, setPet] = useState("");
  const [color, setColor] = useState("");
  const [friend, setFriend] = useState("");

  // Change password
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const storedUserId = localStorage.getItem("userId");
  const storedPwd = localStorage.getItem("password");

  // ---------------- LOGIN ----------------
  const handleLogin = async (userId, password) => {
  try {
    const res = await fetch("http://localhost:8081/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, password })
    });

    const message = await res.text();
    alert(message); // Shows "Login Successful" or "Invalid Password"
  } catch (err) {
    console.error(err);
    alert("Error connecting to server");
  }
};

  // ---------------- FORGOT PASSWORD ----------------
  const handleForgot = () => {
    if (
      pet === localStorage.getItem("pet") &&
      color === localStorage.getItem("color") &&
      friend === localStorage.getItem("friend")
    ) {
      alert("Your password is: " + storedPwd);
    } else {
      alert("Security answers do not match");
    }


    console.log("Typed UserId:", userId);
console.log("Stored UserId:", storedUserId);
console.log("Typed Password:", password);
console.log("Stored Password:", storedPwd);
  };




  // ---------------- CHANGE PASSWORD ----------------
  const validNewPassword =
    newPwd.length >= 8 &&
    newPwd.length <= 16 &&
    /[A-Z]/.test(newPwd) &&
    /[a-z]/.test(newPwd) &&
    /[0-9]/.test(newPwd) &&
    /[!@#$%^&*]/.test(newPwd);

  const handleChangePassword = () => {
    if (oldPwd !== storedPwd) {
      alert("Old password incorrect");
      return;
    }
    if (!validNewPassword) {
      alert("New password does not meet requirements");
      return;
    }
    if (newPwd !== confirmPwd) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("password", newPwd);
    alert("Password changed successfully ✅");

    setMode("login");
    setOldPwd("");
    setNewPwd("");
    setConfirmPwd("");
  };

  // ---------------- UI ----------------
  return (
    <div className="container mt-5 p-4 bg-light border rounded">
      <h2 className="text-success">Login Page</h2>

      {/* LOGIN SECTION */}
      {!loggedIn && mode === "login" && (
        <>
        <label className="mt-3">User ID</label>

          <input
            className="form-control mb-2"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <label className="mt-3">Password</label>
          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
  className="btn btn-primary"
  onClick={() => handleLogin(userId, password)}
>
  Login
</button>

          <div className="mt-3">
            <button
              className="btn btn-link"
              onClick={() => setMode("forgot")}
            >
              Forgot Password
            </button>

            <button
              className="btn btn-link"
              onClick={() => setMode("change")}
            >
              Change Password
            </button>
          </div>
        </>
      )}

      {/* FORGOT PASSWORD SECTION */}
      {mode === "forgot" && (
        <>
          <h4 className="mt-3">Forgot Password</h4>

          <input
            className="form-control mb-2"
            placeholder="Pet name"
            onChange={(e) => setPet(e.target.value)}
          />
          <input
            className="form-control mb-2"
            placeholder="Favourite color"
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            className="form-control mb-2"
            placeholder="Best friend name"
            onChange={(e) => setFriend(e.target.value)}
          />

          <button className="btn btn-warning" onClick={handleForgot}>
            Verify
          </button>

          <button className="btn btn-link" onClick={() => setMode("login")}>
            Back to Login
          </button>
        </>
      )}

      {/* CHANGE PASSWORD SECTION */}
      {mode === "change" && (
        <>
          <h4 className="mt-3">Change Password</h4>

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Old Password"
            onChange={(e) => setOldPwd(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-2"
            placeholder="New Password"
            onChange={(e) => setNewPwd(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Confirm New Password"
            onChange={(e) => setConfirmPwd(e.target.value)}
          />

          <button className="btn btn-success" onClick={handleChangePassword}>
            Update Password
          </button>

          <button className="btn btn-link" onClick={() => setMode("login")}>
            Back to Login
          </button>
        </>
      )}

      {loggedIn && <h3 className="mt-4 text-success">Welcome 🎉</h3>}
    </div>
  );
}

export default Login;
