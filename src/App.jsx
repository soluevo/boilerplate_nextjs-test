import './App.css'
import 'antd/dist/reset.css';
import { BaseLayout } from './components/BaseLayout';
import { Markets } from './pages/Markets';
import { Routes, Route, Link } from "react-router-dom";
import { Apps } from './pages/Apps';
import { Curves } from './pages/Curves';
import { Orders } from './pages/Orders';
import { Portfolio } from './pages/Portfolio';
import { Recipients } from './pages/Recipients';
import { Schedule } from './pages/Schedule';
import { Journal } from './pages/Journal';
import { Members } from './pages/Members';

function App() {
  return (
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<Markets />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/curves" element={<Curves />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/recipients" element={<Recipients />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/members" element={<Members />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App
