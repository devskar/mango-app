import { NextPage } from 'next';
import React from 'react';
import ExpenseView from '../components/ExpenseView';
import ShareView from '../components/ShareView';
import SpendingPlanView from '../components/SpendingPlanView';

interface Props {}

const Home: NextPage = () => {
  return (
    <>
      <head>
        <title>Mango</title>
      </head>

      <div id='display'>
        <ExpenseView />
        <SpendingPlanView />
        <ShareView />
      </div>
    </>
  );
};

export default Home;
