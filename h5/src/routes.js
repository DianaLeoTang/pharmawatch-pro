/*
 * @Author: Diana Tang
 * @Date: 2025-12-03 21:14:24
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /h5/src/routes.js
 */
import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdArticle,
  MdSummarize,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import Home from 'views/admin/home';
import Article from 'views/admin/article';
import Summary from 'views/admin/summary';


const routes = [
  {
    name: 'Home',
    layout: '/admin',
    path: '/home',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <Home />,
  },
  {
    name: 'Article',
    layout: '/admin',
    path: '/article/:id',
    icon: <Icon as={MdArticle} width="20px" height="20px" color="inherit" />,
    component: <Article />,
  },
  {
    name: 'Summary',
    layout: '/admin',
    path: '/summary',
    icon: <Icon as={MdSummarize} width="20px" height="20px" color="inherit" />,
    component: <Summary />,
  },
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Data Tables',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
];

export default routes;
