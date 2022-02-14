import React from "react";
import SideBar from "./sidebar";
import Users from "./users";
import Posts from "./posts";
import { Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <div className="dashboard__content">
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/posts" component={Posts} />
      </div>
    </div>
  );
};

export default Dashboard;
