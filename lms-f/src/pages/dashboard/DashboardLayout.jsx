// pages/dashboard/DashboardLayout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="flex-1 overflow-auto bg-gray-100 relative">
          <Outlet /> {/* Render nested routes here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
