import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { SendTransaction } from './SendTransaction';

const DonationWidget = () => {
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState(0);
  const donationAddress = '0xYourDonationWalletAddress'; // replace with your donation wallet address

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  return (
    <div>
      <h2>Donate</h2>
      <p>Donation Wallet Address: {donationAddress}</p>
      {isConnected && (
        <>
          <label>
            Amount:
            <input type="number" value={amount} onChange={handleAmountChange} />
          </label>
          <SendTransaction to={donationAddress} value={amount} />
        </>
      )}
    </div>
  );
};

export default DonationWidget;
