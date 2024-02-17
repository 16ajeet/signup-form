import React, { useState } from 'react';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [confirmPasswordValidated, setConfirmPasswordValidated] = useState(false);

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    setEmailValidated(isValid);
    return isValid;
  };

  const validatePassword = () => {
    const isValid = password.length >= 8;
    setPasswordValidated(isValid);
    return isValid;
  };

  const validateConfirmPassword = () => {
    const isValid = password === confirmPassword;
    setConfirmPasswordValidated(isValid);
    return isValid;
  };

  const handleSubmit = () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert("Can't submit the form");
    }
  };

  return (
    <div className='form-container'>
      <div className='form'>
        <label className='labels'>Email:</label>
        <input className='inputField'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{borderRadius: '5px', border: emailValidated ? '1px solid green' : '1px solid red' }}
        />
        {!emailValidated && <p style={{ color: 'red' }}>Please enter a valid email address</p>}
      </div>
      <div className='form'>
        <label>Create Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{borderRadius: '5px'}}
        />
        {!passwordValidated && <p style={{ color: 'red' }}>Password must be at least 8 characters long</p>}
      </div>
      <div className='form'>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ borderRadius: '5px', border: confirmPasswordValidated ? '2px solid green' : '2px solid red' }}
        />
        {!confirmPasswordValidated && <p style={{ color: 'red' }}>Passwords do not match</p>}
      </div>
      <button className='button' onClick={handleSubmit}>Sign Up</button>
    </div>
  );
}

export default SignUpPage;
