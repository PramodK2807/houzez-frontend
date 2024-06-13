import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/css/slick.css";
import Homepage from "./Components/Home/Homepage";
import AddProperty from "./Components/User/AddProperty";
import BookMarkProp from "./Components/User/BookMarkProp";
import MyProperty from "./Components/User/MyProperty";
import ViewProperty from "./Components/Property/ViewProperty";
import Login from "./Components/Login";
import EditProperty from "./Components/User/EditProperty";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import MyProfile from "./Components/User/MyProfile";
import ChangePassword from "./Components/Auth/ChangePassword";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="*" element={<Homepage />} />
      <Route exact path="/auth" element={<Login />} />
      <Route exact path="/Forgot-Password" element={<ForgotPassword />} />
      <Route exact path="/Change-Password" element={<ChangePassword />} />
      <Route exact path="User/add-new-property" element={<AddProperty />} />
      <Route exact path="User/edit-property/:id" element={<EditProperty />} />
      <Route exact path="User/save-property" element={<BookMarkProp />} />
      <Route exact path="User/my-property" element={<MyProperty />} />
      <Route exact path="User/My-Profile" element={<MyProfile />} />
      <Route exact path="property/view/:id" element={<ViewProperty />} />
    </Routes>
  );
}

export default App;
