import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function UserLogin() {
  const [cookies, setCookies] = useCookies(['user_id']);
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();

  // Check if user is already logged in on component mount
  useEffect(() => {
    if (cookies.user_id) {
      navigate('/admin-dashboard');
    } else {
      setIsChecking(false);
    }
  }, [cookies.user_id, navigate]);

  const formik = useFormik({
    initialValues: {
      user_id: '',
      password: ''
    },
    onSubmit: (user) => {
      axios.get(`http://localhost:3000/users`)
        .then(res => {
          const foundUser = res.data.find(item => item.user_id === user.user_id);
          if (foundUser) {
            if (foundUser.password === user.password) {
              setCookies('user_id', foundUser.user_id, { expires: new Date('2025-09-10') });
              navigate('/admin-dashboard'); // Navigate immediately after setting cookie
            } else {
              alert('Incorrect Password !');
            }
          } else {
            alert('Invalid User ID');
          }
        })
        .catch(error => {
          console.error('Login error:', error);
          alert('Login failed. Please try again.');
        });
    }
  });

  // Show loading state while checking authentication
  if (isChecking) {
    return (
      <Container sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '50vh'
      }}>
        <Typography>Checking authentication...</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: '50vh'
    }}>
      <form onSubmit={formik.handleSubmit} style={{width: "500px", marginTop:"100px"}}>
        <Box sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          bgcolor: 'primary.contrastText',
          borderRadius: "10px"
        }}>
          <h2>User Login</h2>
          <TextField 
            label="User Name" 
            variant="outlined" 
            name="user_id" 
            value={formik.values.user_id}
            onChange={formik.handleChange} 
            required
          />
          <TextField 
            label="Password" 
            variant="outlined" 
            name="password" 
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange} 
            required
          />
          <Button variant="contained" color="warning" type="submit" sx={
            {
              marginTop:"30px"
            }
          }>
            Login
          </Button>
          <Button variant="contained" color="error">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Cancel</Link>
          </Button>
        </Box>
      </form>
    </Container>
  );
}