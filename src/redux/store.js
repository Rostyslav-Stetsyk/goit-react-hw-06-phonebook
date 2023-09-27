import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initState = {
  account: {
    balance: 0,
  },
};

export const deposit = value => {
  return {
    type: 'account/deposit',
    payload: {
      value,
    },
  };
};

export const withdraw = value => {
  return {
    type: 'account/withdraw',
    payload: {
      value,
    },
  };
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        account: {
          ...state.account,
          balance: state.account.balance + action.payload.value,
        },
      };
    case 'account/withdraw':
      return {
        ...state,
        account: {
          ...state.account,
          balance: state.account.balance - action.payload.value,
        },
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
