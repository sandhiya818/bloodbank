import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          
          <div className="q"><b><center>"Blood donation is a small act of kindness that makes a big difference."</center></b></div>
<p>
Blood donation is a vital practice that sustains healthcare systems worldwide by providing a critical resource for medical treatments and emergencies. Donated blood is essential for patients undergoing surgeries, cancer treatments, and managing chronic illnesses, as well as for trauma victims in need of immediate transfusions. Regular blood donations help maintain an adequate supply, ensuring that hospitals are prepared for both routine and unforeseen medical needs. Moreover, donating blood has health benefits for the donors themselves, including a sense of community contribution and a potential reduction in the risk of certain health conditions. By participating in blood donation, individuals can save lives and support the overall health and resilience of their communities.</p>
<div className="q"><b><center>"Be a hero; donate blood and save lives."</center></b></div>

          
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;