
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const Auth = ({ children }) => {
  const { logged, loading } = useSelector((state) => state.auth);
 
  console.log("Auth Status:", logged,loading);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return logged ? children : <Navigate to="/login" />;

};

export default Auth;
