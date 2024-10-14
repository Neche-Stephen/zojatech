import { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './pages/signup/Signup';
import SignupForm from './components/signup/signup-form/SignupForm';
import ConfirmEmail from './components/signup/confirm-email/ConfirmEmail';
import OTPVerification from './components/signup/verify-email/VerifyEmail';
import ChooseSignupPlatform from './components/signup/choose-signup-platform/ChooseSignupPlatform';
import EmailConfirmed from './components/signup/email-confirmed/EmailConfirmed';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Chat from './pages/chat-page/Chat';

function App() {
  const [count, setCount] = useState(0);
  const [newUser, setNewUser] = useState({ id: '5', first_name: 'Sarah' });



  useEffect(() => {
  //  localStorage.clear();
  // addUserToLocalStorage(newUser);
  }, []);
  


  return (
      <BrowserRouter>

        <Routes>
        <Route path="/" element={<Signup />}>
          <Route index element={<ChooseSignupPlatform />} />
          <Route path="signup"element={<SignupForm />} />
          <Route path="confirm-email" element={<ConfirmEmail />} />
          <Route path="verify-otp" element={<OTPVerification />} />
          <Route path="email-confirmed" element={<EmailConfirmed />} />
        </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />

        </Routes>

      </BrowserRouter>
  )
}

export default App
