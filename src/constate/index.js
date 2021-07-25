import { useState } from "react";
import constate from "constate";

const useGlobalState = () => {
  const [state, setState] = useState({ count: 4 });

  const increment = async () => {
    setState({ count: state.count + 1 });
  };

  const decrement = async () => {
    setState({ count: state.count - 1 });
  };

  return { state, decrement, increment };
};

const [GlobalStateProvider, useGlobalStateContext] = constate(useGlobalState);

export { GlobalStateProvider, useGlobalStateContext };
