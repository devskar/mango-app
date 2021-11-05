import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { HouseholdControllerContext } from './HouseholdController';

const SpendingPlanView = () => {
  const household = useContext(HouseholdControllerContext);

  const data = {
    labels: [...household.spendingPlan.shares.map((s) => s.name), 'rest'],
    datasets: [
      {
        label: '# of Votes',
        data: [...household.spendingPlan.shares.map((s) => s.amount)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Doughnut data={data}></Doughnut>
    </div>
  );
};

export default observer(SpendingPlanView);
