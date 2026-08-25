import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ForgotPassword.css";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [step, setStep] = useState(1);

  // STEP 1 - Request recovery code
  const handleRequestCode = (e) => {
    e.preventDefault();
    console.log("Recovery code requested for:", phone);
    setStep(2);
  };

  // STEP 2 - Verify recovery code
  const handleVerifyCode = (e) => {
    e.preventDefault();
    console.log("Verification code:", code);
    setStep(3);
  };

  // STEP 3 - Reset password
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log("Password reset");
    alert("Password reset successful.");
    navigate("/login");
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-card">
        <h1>Forgot Password?</h1>

        {/* STEP 1 */}

        {step === 1 && (
          <>
            <p>
              Enter the phone number you used to create your Farmily
              account. We will send you a recovery code.
            </p>

            <form onSubmit={handleRequestCode}>

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="Enter your registered phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required/>

              <button type="submit">
                Request Recovery Code
              </button>

            </form>
          </>
        )}


        {/* STEP 2 */}

        {step === 2 && (
          <>
            <p>
              A recovery code has been sent to your phone number.
              Enter the code below to verify your account.
            </p>

            <form onSubmit={handleVerifyCode}>

              <label htmlFor="code">
                Recovery Code
              </label>

              <input
                id="code"
                type="text"
                inputMode="numeric"
                placeholder="Enter recovery code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required/>

              <button type="submit">
                Verify Code
              </button>

            </form>
          </>
        )}


        {/* STEP 3 */}

        {step === 3 && (
          <>
           <div className="verification-success">
           <div className="verification-icon">✓</div>
           <h2>Phone Number Verified</h2>
           <p>
             Your phone number has been successfully verified.
             You can now create a new password for your Farmily account.
           </p>
          </div>

            <form onSubmit={handleResetPassword}>

              <label htmlFor="new-password">
                New Password
              </label>

              <input
                id="new-password"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required/>

              <label
                htmlFor="confirm-password"
                className="confirm-password-label">
                Confirm New Password
              </label>

              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required/>

              <button type="submit">
                Reset Password
              </button>

            </form>
          </>
        )}


        <button
          className="back-login-btn"
          onClick={() => navigate("/login")}>
          Back to Login
        </button>

      </div>

    </div>
  );
}