import AdminLayout from "@/components/AdminLayout";
import Banner from "@/components/admin/basic/banner"
import Visi from "@/components/admin/basic/visimisi"
import React from "react";

const AdminHome = () => {
  return (
    <AdminLayout>
      <Banner />
      <Visi />
    </AdminLayout>
  );
};

export default AdminHome;
