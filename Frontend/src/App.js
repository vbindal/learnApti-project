import { ToastContainer } from 'react-toastify'; // routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';

import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Scores from './pages/User';
import NotFound from './pages/Page404';
import Classroom from './pages/Classroom';
import JoinClass from './pages/JoinClass';
import CreateTest from './pages/CreateTest';
import Test from './pages/Test';

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <Login />
      {/* <Router /> */}
      {/* <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </ThemeConfig>
  );
}
