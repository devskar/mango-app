import { observer } from 'mobx-react-lite';
import React, { useContext, useRef } from 'react';
import { HouseholdControllerContext } from '../HouseholdController';
import ShareCardView from './ShareCardView';

interface Props {}

const ShareView: React.FC<Props> = () => {
  const household = useContext(HouseholdControllerContext);

  const nameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const cards = household.shares.map((share, index) => (
    <ShareCardView key={index} share={share} />
  ));

  return (
    /* TODO: remove backgroundColor */

    <div id='shareView' style={{ backgroundColor: 'green' }}>
      <h1>Shares</h1>
      <div className='shareInput'>
        Add a Share:
        <input ref={nameRef} type='text' />
        <input ref={amountRef} type='number' min={0} max={100} />
        <button
          onClick={() => {
            household.addShare(
              nameRef.current!.value,
              amountRef.current!.valueAsNumber,
            );
          }}
        >
          add
        </button>
      </div>
      <div className='shareCardContainer'>{cards}</div>
    </div>
  );
};

export default observer(ShareView);
