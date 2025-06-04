'use client';

import Link from 'next/link';
import ProductList from './products/page';
import UsersList from './users/page';
import AdminDashboardHeader from './adminDashboardHeader/adminDashboardHead';

const AdminDashboard = () => {
  return (
    <>
      <AdminDashboardHeader />

      <ProductList />

      <UsersList />
    </>
  );
};

export default AdminDashboard;
