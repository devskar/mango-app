import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { HouseholdControllerContext } from '../HouseholdController';

const SpendingPlanView = () => {
  const household = useContext(HouseholdControllerContext);

  const colors = (a: number) => {
    type Color = {
      r: number;
      g: number;
      b: number;
    };

    const getColorString = (c: Color): string => {
      return `rgb(${c.r}, ${c.g}, ${c.b}, ${a})`;
    };

    const getColorStrings = (values: Color[]): string[] => {
      return values.map((v) => getColorString(v));
    };

    /* TODO: Add more colors */
    return getColorStrings([
      ...(household.hasUnusedPercentage() ? [{ r: 150, g: 123, b: 137 }] : []),
      ...[
        { r: 255, g: 99, b: 132 },
        { r: 54, g: 162, b: 235 },
        { r: 255, g: 206, b: 86 },
        { r: 75, g: 192, b: 192 },
        { r: 153, g: 102, b: 255 },
        { r: 255, g: 159, b: 64 },
        { r: 255, g: 0, b: 200 },
        { r: 111, g: 245, b: 0 },
      ],
    ]);
  };
  // TODO: Reverse the order of shares so it slides just on it and not over everything
  const data = {
    labels: [
      ...(household.hasUnusedPercentage() ? ['rest'] : []),
      ...household.shares.map((s) => s.name),
    ],
    datasets: [
      {
        data: [
          ...(household.hasUnusedPercentage()
            ? [household.getUnusedPercentage()]
            : []),
          ...household.shares.map((s) => s.amount),
        ],
        backgroundColor: colors(0.2),
        borderColor: colors(1),
        borderWidth: 1,
      },
    ],
  };
  return (
    <div id='spendingPlanDoughnutContainer'>
      <Doughnut
        options={{
          plugins: {
            title: {
              display: true,
              text: household.name,
              font: { size: 20 },
            },
            subtitle: {
              display: true,
              text: 'Overview of your households spending plan',
              font: { size: 14 },
              padding: {
                bottom: 10,
              },
            },

            legend: {
              display: false,
            },
          },
        }}
        data={data}
      ></Doughnut>
    </div>
  );
};

export default observer(SpendingPlanView);
