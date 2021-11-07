import { observer } from 'mobx-react-lite';
import React, { useContext, useRef } from 'react';
import { HouseholdControllerContext } from '../HouseholdController';
import { Share } from '../models/SpendingPlanModel';

interface Props {}

const HouseholdView: React.FC<Props> = () => {
  const household = useContext(HouseholdControllerContext);

  const nameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <p>{household.name}</p>
      Add a Share:
      <input ref={nameRef} type='text' />
      <input ref={amountRef} type='number' min={0} max={100} />
      <button
        onClick={() => {
          household.addShare(
            new Share(nameRef.current!.value, amountRef.current!.valueAsNumber),
          );
        }}
      >
        add
      </button>
    </div>
  );
};

export default observer(HouseholdView);
