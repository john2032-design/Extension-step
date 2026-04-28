import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import IOS from './pages/iOS';
import Android from './pages/Android';
import PC from './pages/PC';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ios" element={<IOS />} />
        <Route path="/android" element={<Android />} />
        <Route path="/pc" element={<PC />} />
      </Routes>
    </Layout>
  );
}
