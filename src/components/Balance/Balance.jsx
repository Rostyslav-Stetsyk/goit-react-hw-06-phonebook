import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from 'redux/store';

export const Balance = () => {
  const balance = useSelector(state => state.account.balance);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  return (
    <div>
      <p>Balance: {balance}</p>
      <input
        type="number"
        value={value}
        onChange={e => setValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch(deposit(value))}>+</button>
      <button onClick={() => dispatch(withdraw(value))}>-</button>
    </div>
  );
};
