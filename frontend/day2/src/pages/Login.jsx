import React, { useState } from 'react';
import style from './Login.module.css';
import { Link } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username && password) {
      setError('');
      console.log('Login successful!');
    } else {
      setError('Please enter both username and password.');
    }
  };
// const handleLogin = () => {
//     if (role === 'user') {
//               // User login logic
//               alert('User login successful. Redirecting to user dashboard.');
//             } else if (role === 'admin') {
//               // Admin login logic
//               alert('Admin login successful. Redirecting to admin dashboard.');
//             } else {
//               setErrorMessage('Invalid role selected.');
//             }
//           };
    


  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="login-container" style={{marginTop:'140px'}}>
    <center>
    <br></br>
    <h2>Login</h2>
    </center>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            
            <div className="form-group">
            <br></br>
            <center>
            <button type="button" onClick={handleLogin}>
            Login
            </button>
            {/* <div className="form-group">
            <label htmlFor="role">Login as:</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            </select>
            </div> */}
            <Link to='/signup'>
            <p> Don't have an account?</p>
            </Link>
            </center>
            <br></br>
            </div>
            {error && <div className="error-message">{error}</div>}
            </form>
            </div>
            </div>
  );
};

export default Login;


// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../context/useAuth";
// // import React, { useState } from 'react';
// import style from './Login.module.css';
//  import { Link } from 'react-router-dom';
// import Signup from './Signup';

// function Login() {
//   const [notification, setNotification] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isSignIn, setIsSignIn] = useState(true); // State to manage whether to show sign-in form or admin form
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const inputRefs = {
//     email: useRef(null),
//     password: useRef(null),
//     adminEmail: useRef(null),
//     adminPassword: useRef(null),
//   };

//   const clearForm = () => {
//     Object.values(inputRefs).forEach((ref) => {
//       if (ref.current) {
//         ref.current.value = "";
//       }
//     });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const {
//       email: { current: emailInput },
//       password: { current: passwordInput },
//     } = inputRefs;

//     try {
//       await login(emailInput.value, passwordInput.value);
//       setNotification("Login successful!");
//       clearForm(); // Clear the form on success
//       navigate("/user");
//     } catch (error) {
//       console.error("Login Error:", error.message);
//       setNotification("Error signing in.");
//       clearForm(); // Clear the form on error as well
//     }
//   };

//   const handleAdminLogin = async (e) => {
//     e.preventDefault();

//     const {
//       adminEmail: { current: adminEmailInput },
//       adminPassword: { current: adminPasswordInput },
//     } = inputRefs;

//     try {
//       // Implement admin login functionality using adminEmailInput.value and adminPasswordInput.value
//       setNotification("Admin login successful!");
//       clearForm(); // Clear the form on success
//       navigate("/admin");
//     } catch (error) {
//       console.error("Admin Login Error:", error.message);
//       setNotification("Error signing in as admin.");
//       clearForm(); // Clear the form on error as well
//     }
//   };

//   useEffect(() => {
//     if (!isSignIn) {
//       setNotification(""); // Clear notification when switching to admin form
//     }
//   }, [isSignIn]);

//   return (
//     <section className="bg-white signin-container">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 ">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark text-center">
//               {isSignIn ? "Sign in to your account" : "Admin Sign in"}
//             </h1>
//             <form
//               onSubmit={isSignIn ? handleLogin : handleAdminLogin}
//               className="space-y-4 md:space-y-6"
//               action="#"
//             >
//               {(isSignIn || !notification) && (
//                 <>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block mb-2 text-sm font-medium text-black dark:text-white"
//                     >
//                       Your email
//                     </label>
//                     <input
//                       ref={inputRefs.email}
//                       type="email"
//                       name="email"
//                       id="email"
//                       className="border border-gray-300 rounded-lg focus:ring-yellow-600 focus:border-yellow-600 focus:ring-1 focus:outline-none block w-full p-2.5"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="password"
//                       className="block mb-2 text-sm font-medium text-black dark:text-white"
//                     >
//                       Password
//                     </label>
//                     <input
//                       ref={inputRefs.password}
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       id="password"
//                       className="border border-gray-300 rounded-lg focus:ring-yellow-600 focus:border-yellow-600 focus:ring-1 focus:outline-none block w-full p-2.5"
//                       required
//                     />
//                   </div>
//                 </>
//               )}
//               {!isSignIn && (
//                 <>
//                   <div>
//                     <label
//                       htmlFor="adminEmail"
//                       className="block mb-2 text-sm font-medium text-black dark:text-white"
//                     >
//                       Admin Email
//                     </label>
//                     <input
//                       ref={inputRefs.adminEmail}
//                       type="email"
//                       name="adminEmail"
//                       id="adminEmail"
//                       className="border border-gray-300 rounded-lg focus:ring-yellow-600 focus:border-yellow-600 focus:ring-1 focus:outline-none block w-full p-2.5"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="adminPassword"
//                       className="block mb-2 text-sm font-medium text-black dark:text-white"
//                     >
//                       Admin Password
//                     </label>
//                     <input
//                       ref={inputRefs.adminPassword}
//                       type={showPassword ? "text" : "password"}
//                       name="adminPassword"
//                       id="adminPassword"
//                       className="border border-gray-300 rounded-lg focus:ring-yellow-600 focus:border-yellow-600 focus:ring-1 focus:outline-none block w-full p-2.5"
//                       required
//                     />
//                   </div>
//                 </>
//               )}

//               {(isSignIn || !notification) && (
//                 <>
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="showPassword"
//                       checked={showPassword}
//                       onChange={() => setShowPassword(!showPassword)}
//                       className="mr-2 text-primary-600 dark:text-primary-500"
//                     />
//                     <label
//                       htmlFor="showPassword"
//                       className="text-sm font-medium text-black dark:text-white cursor-pointer"
//                     >
//                       Show Password
//                     </label>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full text-white bg-yellow-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-none"
//                   >
//                     {isSignIn ? "Sign in" : "Admin Sign in"}
//                   </button>
//                 </>
//               )}

//               {notification && (
//                 <p
//                   className={`text-center text-sm ${
//                     notification.includes("success")
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {notification}
//                 </p>
//               )}

//               <div className="flex justify-between">
//                 <button
//                   onClick={() => setIsSignIn(false)}
//                   className={`w-1/2 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white ${
//                     !isSignIn && "opacity-50 cursor-not-allowed"
//                   }`}
//                   disabled={!isSignIn}
//                 >
//                   Admin
//                 </button>
//                 <button
//                   onClick={() => setIsSignIn(true)}
//                   className={`w-1/2 bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white ${
//                     isSignIn && "opacity-50 cursor-not-allowed"
//                   }`}
//                   disabled={isSignIn}
//                 >
//                   User
//                 </button>
//               </div>

//               {!isSignIn && (
//                 <p className="text-sm font-light text-gray-500 dark:text-gray-500">
//                   Return to{" "}
//                   <button
//                     onClick={() => setIsSignIn(true)}
//                     className="font-medium text-gray-500 hover:text-yellow-600 dark:text-gray-500 dark:hover:text-yellow-600 hover:no-underline dark:hover:no-underline focus:outline-none"
//                   >
//                     Sign in
//                   </button>
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import style from './Login.module.css';
// import { Link } from 'react-router-dom';
// import Signup from './Signup';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('user');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = () => {
//     // Example: Replace with actual authentication logic
//     if (role === 'user') {
//       // User login logic
//       alert('User login successful. Redirecting to user dashboard.');
//     } else if (role === 'admin') {
//       // Admin login logic
//       alert('Admin login successful. Redirecting to admin dashboard.');
//     } else {
//       setErrorMessage('Invalid role selected.');
//     }
//   };

//   return (
//     <div className="login-container" style={{marginTop:"200px"}}>
//       <h2>Login</h2>
//       <div className="form-group">
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       </div>
//       <div className="form-group">
//         <label htmlFor="role">Login as:</label>
//         <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>
//       </div>
//       <button onClick={handleLogin}>Login</button>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//     </div>
//   );
// };

// export default Login;
