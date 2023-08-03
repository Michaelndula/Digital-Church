import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    // If token is not present, redirect to login page
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
};

export default useAuth;