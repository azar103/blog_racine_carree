import React from "react";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="container">
      <div className="dashboard-header">
        <h2>Books</h2>
        <button>Create Book</button>
      </div>
      <div className="dashboard-content">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Author</th>
              <th>Category</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
