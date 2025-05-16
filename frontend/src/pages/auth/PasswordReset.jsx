import React, { useEffect, useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const OTP_LENGTH = 6;

const PasswordReset = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Refs to input elements for focusing next input automatically
  const inputRefs = useRef([]);

  const handleSendOtp = () => {
    if (!email) return alert("Please enter your email first.");
    setOtpSent(true);
    setCountdown(30);
    // Trigger OTP send API here
  };

  const handleOtpChange = (element, index) => {
    if (!/^\d*$/.test(element.value)) return; // only digits allowed
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && index < OTP_LENGTH - 1) {
      // focus next input
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOtp = () => {
    if (otp.some((digit) => digit === "")) return alert("Please enter complete OTP.");
    setIsOtpVerified(true);
    // Verify OTP API call here with otp.join("")
  };

  const handleUpdatePassword = () => {
    if (!newPassword) return alert("Please enter a new password.");
    // Password update API call here
    alert("Password updated successfully!");
    onClose(); // Close modal after success
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-sm shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 text-xl hover:text-black"
          onClick={onClose}
          aria-label="Close password reset modal"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl Space_Grotesk font-semibold mb-4 text-center">
          Reset Password
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Registered Email"
            required
            className="border p-2 rounded"
            disabled={otpSent} // disable email input after OTP sent
          />

          {/* OTP Section */}
          {!otpSent ? (
            <button
              type="button"
              onClick={handleSendOtp}
              className="p-2 button rounded transition-colors"
            >
              Send OTP
            </button>
          ) : (
            <>
              <div className="flex justify-center gap-2">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target, idx)}
                    onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                    ref={(el) => (inputRefs.current[idx] = el)}
                    className="w-10 h-10 text-center border rounded text-xl"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="p-2 rounded button transition-colors"
              >
                Verify OTP
              </button>

              <p className="text-sm text-gray-500 text-center">
                {countdown > 0 ? (
                  `Resend OTP in ${countdown}s`
                ) : (
                  <span
                    className="text-blue-600 font-medium cursor-pointer"
                    onClick={handleSendOtp}
                  >
                    Resend OTP
                  </span>
                )}
              </p>
            </>
          )}

          {/* New Password Input */}
          {isOtpVerified && (
            <>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New Password"
                  required
                  className="border p-2 rounded"
                />
                <span
                  className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button
                type="button"
                onClick={handleUpdatePassword}
                className="p-2 button rounded transition-colors"
              >
                Change Password
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
