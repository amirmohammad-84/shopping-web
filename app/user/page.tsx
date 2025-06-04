'use client';

import UserDashboardHeader from './userDashboardHeader/userDashboardHead'
import Link from 'next/link';
import OrderList from '../user/orderList/page';
import Orders from '../user/orders/page';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "User Dashboard",
  description: "User Dashboard",
};


const UserDashboard = () => {
  return (
    <>
      <UserDashboardHeader />

      <Orders />

      <OrderList />
    </>
  );
};

export default UserDashboard;
