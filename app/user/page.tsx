'use client';

import UserDashboardHeader from './userDashboardHeader/userDashboardHead'
import Link from 'next/link';
import OrderList from '../user/orderList/page';
import Orders from '../user/orders/page';

const AdminDashboard = () => {
  return (
    <>
      <UserDashboardHeader />

      <Orders />

      <OrderList />
    </>
  );
};

export default AdminDashboard;
