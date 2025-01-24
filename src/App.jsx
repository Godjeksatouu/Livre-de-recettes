import Layout from "./layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <Layout />
      <ToastContainer position="top-center" />
      <GoToTheTop />
    </>
  );
}

export default App;
