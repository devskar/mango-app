import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { HouseholdControllerContext } from '../HouseholdController';
import Share from '../models/ShareModel';

interface Props {
  share: Share;
}

const ShareCardView: React.FC<Props> = ({ share }: Props) => {
  const household = useContext(HouseholdControllerContext);

  return (
    <div className='shareCard'>
      <h3>{share.name}</h3>
      <p>{share.amount}</p>
      <button
        className='shareCardButton'
        onClick={() => {
          household.removeShare(share);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default observer(ShareCardView);
