import * as React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./components/dashboard";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import Team from "./components/team";
import Projects from "./components/projects";
import Calender from "./components/calender";
import { useRCPContext } from "./context";
import { useRCPService } from "./RCPService/";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="projects" element={<Projects />} />
      <Route path="calender" element={<Calender />} />
    </Route>
  )
);

function App() {
  const { data, error, isLoading } = useRCPService();
  const { setRCPState } = useRCPContext();

  React.useEffect(() => {
    setRCPState((prevState) => ({
      ...prevState,
      dashboard: data?.dashboard,
      team: data?.team,
    }));
  }, [data, setRCPState]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
