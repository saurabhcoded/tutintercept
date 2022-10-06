import logo from "./logo.svg";
import "./App.css";
import Axios from "./intercept";
import { useEffect } from "react";
import { Formik } from "formik";

function App() {
  useEffect(() => {
    // Fetch Product With Intercepted customAxios
    // Axios.get("/products")
    // .then(response=>console.log(response))
    Axios.post("/carts", {
      userId: 5,
      date: "2020-02-03",
      products: [
        { productId: 5, quantity: 1 },
        { productId: 1, quantity: 5 },
      ],
    }).then(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Formik Tutorial  */}
      <h5 style={{ textAlign: "center" }}>Formik Test</h5>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)
          ) {
            errors.email = "Invalid Password";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="email"
            />{" "}
            <br /> {errors.email && touched.email && errors.email}
            <br />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="password"
            />{" "}
            <br />
            {errors.password && touched.password && errors.password} <br />
            {/* <input type="phone" placeholder='contact' /> <br /> <br />
          <input type="email"  placeholder='email'/> <br /> <br />
          <textarea name="" id="" cols="30" rows="10">Message</textarea> <br /> <br /> */}
            <button type="submit"  disabled={isSubmitting}>submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
