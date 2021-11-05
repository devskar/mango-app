import { observer } from 'mobx-react-lite';
import React, { useContext, useRef } from 'react';
import { Share } from '../models/SpendingPlanModel';
import { HouseholdControllerContext } from './HouseholdController';

interface Props {}

const HouseholdView: React.FC<Props> = () => {
  const household = useContext(HouseholdControllerContext);

  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <p>{household.name}</p>

      <label>
        Name:
        <input
          ref={ref}
          type='text'
          name='name'
          onChange={(e) => {
            household.name = e.target.value!;
          }}
        />
      </label>
      <button
        onClick={() => {
          household.spendingPlan.addShare(new Share(ref.current!.value, 10));
          console.log(household.spendingPlan.shares.length);
        }}
      >
        add
      </button>
    </div>
  );
};

export default observer(HouseholdView);
