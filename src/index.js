import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

class InputGroupsComponent extends React.Component {
  render() {
    const {
      label,
      value,
      onChange,
      id,
      name,
      placeholder,
      type,
      error,
    } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={name}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          autoComplete="false"
        />
        {error && (
          <span className="invalid-feedback" style={{ display: "block" }}>
            {error}
          </span>
        )}
      </div>
    );
  }
}

function SignUP() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  useEffect(() => {}, [emailError, passwordError]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email || !password) {
          if (!email) {
            setEmailError("Email is required");
          } else {
            setEmailError("");
          }
          if (!password) {
            setPasswordError("Password is required");
          } else {
            setPasswordError("");
          }
          return;
        }
        console.log(`Email: ${email}`, `Password: ${password}`);
      }}
    >
      <div className="card">
        <div className="card-header text-center">Sign Up</div>
        <div className="card-body">
          <InputGroupsComponent
            name="email"
            type="email"
            placeholder="Enter Email Address"
            label="email"
            error={emailError}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputGroupsComponent
            name="password"
            type="password"
            placeholder="Enter Password"
            label="email"
            error={passwordError}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="card-footer">
          <input
            type="submit"
            value="sign up"
            className="btn btn-sm btn-danger"
          />
        </div>
      </div>
    </form>
  );
}

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="#!" className="navbar-brand">
            {this.props.brand}
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="#!" className="nav-link">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function App() {
  return (
    <React.Fragment>
      <Navbar brand="App" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <SignUP />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
