import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Movies from './components/Movies/Movies';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payment/Subscribe';
import PaymentSuccess from './components/Payment/PaymentSuccess';
import PaymentFailed from './components/Payment/PaymentFailed';
import Notfound from './components/NotFound/Notfound';
import MoviePage from './components/MoviePage/MoviePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateMovie from './components/Admin/CreateMovie/CreateMovie';
import Users from './components/Admin/Users/Users';
import AdminMovies from './components/Admin/AdminMovies/AdminMovies';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { getMyProfile, login } from './redux/Actions/user';
import { ProtectedRoute } from 'protected-route-react';
import Loader from './components/Layout/Loader/Loader';

function App() {
  // window.addEventListener('contextmenu', e => {
  //   e.preventDefault();
  // });

  const { isAuthenticated, user, message, error, loading } = useSelector(
    state => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route
              path="/movie/:id"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <MoviePage user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/request" element={<Request />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/changepassword"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/updateprofile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/forgetpassword"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ForgetPassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/subscribe"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Subscribe user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/paymentfailed" element={<PaymentFailed />} />

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute
                  adminroute={true}
                  redirect="/profile"
                  isAdmin={user && user.role === 'admin'}
                  isAuthenticated={isAuthenticated}
                >
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createmovie"
              element={
                <ProtectedRoute
                  adminroute={true}
                  redirect="/profile"
                  isAdmin={user && user.role === 'admin'}
                  isAuthenticated={isAuthenticated}
                >
                  <CreateMovie />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  adminroute={true}
                  redirect="/profile"
                  isAdmin={user && user.role === 'admin'}
                  isAuthenticated={isAuthenticated}
                >
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/movies"
              element={
                <ProtectedRoute
                  adminroute={true}
                  redirect="/profile"
                  isAdmin={user && user.role === 'admin'}
                  isAuthenticated={isAuthenticated}
                >
                  <AdminMovies />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Notfound />} />

            <Route
              path="/resetpassword/:token"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ResetPassword />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
          <Toaster />
        </>
      )}
    </Router>
  );
}

export default App;
