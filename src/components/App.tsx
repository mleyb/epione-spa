import React from "react";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./Routes";

interface IAppProps {
  history: History;
}

const App: React.FC<IAppProps> = ({ history }: IAppProps) => {
  return (
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  );
};

export default App;
