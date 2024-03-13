import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store email and password in local storage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        
        console.log(`Login with: ${email}, ${password}`); 
    
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit} className="container">
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    value={email} 
                    onChange={handleInputChange} 
                    style={{ letterSpacing: '1px' }} 
                    required 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    name="password"
                    value={password} 
                    onChange={handleInputChange} 
                    required 
                />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
}

export default LoginForm;
