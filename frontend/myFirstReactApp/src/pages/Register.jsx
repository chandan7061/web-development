import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name :", name);
    console.log("Email :", email);
    console.log("Username :", userName);
    console.log("Password :", password);
    console.log("Confirm Password :", confirmPassword);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Register Here</h1>
          <br />

          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />

            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          <hr />
          <p className="text-center">
            Already have an account? <a href="/login">Login here</a>
          </p>  
        </div>
      </div>
    </>
  );
}

export default Register;
