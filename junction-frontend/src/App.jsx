import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import AuthProvider from "./context/AuthProvider";
import RequireAuth from "./components/RequireAuth";
import Signin from "./pages/Signin";
import Public from "./components/Public";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignUpInstructor from "./components/Instructor/SignUpInstructor";
import DashBoradInstructor from "./pages/DashBoradInstructor";
import AdultStudent from "./pages/AdultStudent";
import Courses from "./components/adult_student/Courses";
import Cards from "./components/adult_student/Cards";
import Assigmento from "./components/adult_student/Assigments";
import Goodies from "./components/adult_student/Goodies";
import SelectKid from "./pages/SelectKid";
import Schdule from "./components/adult_student/Schdule";
import NotFound from "./components/NotFound";
import CoursesKid from "./pages/CoursesKid";

const App = () => {
  return (
    <Routes>
      {/* teacher routes */}
      {/* <Route
        element={
          <AuthProvider type="teacher">
            <RequireAuth />
          </AuthProvider>
        }
      > */}
      <Route path="/instructor-dashboard" element={<DashBoradInstructor />} />
      {/* </Route> */}

      {/* adult student routes */}
      {/* <Route
        element={
          <AuthProvider type="adult">
            <RequireAuth />
          </AuthProvider>
        }
      > */}
      <Route path="/adult-student" element={<AdultStudent />}>
        <Route path="/adult-student/courses" element={<Courses />} />
        <Route path="/adult-student/cards" element={<Cards />} />
        <Route path="/adult-student/schdule" element={<Schdule />} />
        <Route path="/adult-student/assigments" element={<Assigmento />} />
        <Route path="/adult-student/goodies" element={<Goodies />} />
      </Route>
      {/* </Route> */}
      <Route path="/kid-student" element={<AdultStudent />}>
        <Route path="/kid-student/courses" element={<CoursesKid />} />
      </Route>
      {/* minor student routes */}
      {/* <Route
        element={
          <AuthProvider type="minor">
            <RequireAuth />
          </AuthProvider>
        }
      > */}
      <Route path="/dashboard" element={<Dashboard />} />
      {/* </Route> */}

      {/* admin routes */}
      <Route
        element={
          <AuthProvider type="admin">
            <RequireAuth />
          </AuthProvider>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/SelectKid" element={<SelectKid />} />
      {/* public routes */}
      <Route element={<Public />}>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-instructor" element={<SignUpInstructor />} />
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
