// src/pages/VerifyEmail.tsx
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/v1/users/verify-email/${token}`
        );
        const data = await res.json();
        if (data.success) {
          toast.success("Email verified successfully!");
          navigate("/dashboard/zakatDonor");
        } else {
          toast.error(data.message || "Verification failed.");
        }
      } catch (err) {
        toast.error("Something went wrong.");
      }
    };
    verify();
  }, [token, navigate]);

  return (
    <div className="text-center mt-10 text-xl">Verifying your email....</div>
  );
};

export default VerifyEmail;
