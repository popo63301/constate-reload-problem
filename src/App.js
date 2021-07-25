import { useGlobalStateContext } from "./constate";

const App = () => {
  const { increment, state } = useGlobalStateContext();

  return (
    <div className="text-xl" onClick={increment}>
      Counter: {state.count}
    </div>
  );
};

export default App;
