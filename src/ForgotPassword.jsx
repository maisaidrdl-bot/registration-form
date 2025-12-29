/*import { useState } from "react";

function ForgotPassword({ userData }) {
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = () => {
    if (a1 === userData.q1 && a2 === userData.q2 && a3 === userData.q3) {
      setMsg(`✅ Password: ${userData.password}`);
    } else {
      setMsg("❌ Answers incorrect");
    }
  };

  return (
    <div className="container mt-5 p-4 glass-card">
      <h2>FORGOT PASSWORD</h2>

      <input className="form-control mb-2" placeholder="Favorite Color" onChange={(e) => setA1(e.target.value)} />
      <input className="form-control mb-2" placeholder="Nickname" onChange={(e) => setA2(e.target.value)} />
      <input className="form-control mb-3" placeholder="Best Friend" onChange={(e) => setA3(e.target.value)} />

      <p>Expiry: {userData.expiry?.toLocaleTimeString()}</p>

      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default ForgotPassword;
*/
import { useState } from "react";

function ForgotPassword() {
 
  const [pet, setPet] = useState('');
  const [color, setColor] = useState('');
  const [friend, setFriend] = useState('');
  const [result, setResult] = useState('');

  const handleCheck = () => {
    const sPet = localStorage.getItem("pet");
    const sColor = localStorage.getItem("color");
    const sFriend = localStorage.getItem("friend");
    const password = localStorage.getItem("password");

    if (pet === sPet && color === sColor && friend === sFriend) {
      setResult(`Your password is: ${password}`);
    } else {
      setResult("Security answers do not match ❌");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Forgot Password</h3>
      
      <input placeholder="Pet name" onChange={e => setPet(e.target.value)} /><br />
      <input placeholder="Favourite color" onChange={e => setColor(e.target.value)} /><br />
      <input placeholder="Best friend name" onChange={e => setFriend(e.target.value)} /><br />

      <button onClick={handleCheck}>Verify</button>

      {result && <p>{result}</p>}
    </div>
  );
}

export default ForgotPassword;
