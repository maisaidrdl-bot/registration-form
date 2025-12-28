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
