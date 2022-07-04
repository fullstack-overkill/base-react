import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageApp from "../views/App";
import routes from "./routes";

const router = () => {
  return (
    <BrowserRouter>
      <PageApp>
        <Routes>
          {routes.map((ObjRoute, index) => {
            return (
              <Route
                path={ObjRoute.path}
                key={index}
                element={<ObjRoute.Component />}
              />
            );
          })}
        </Routes>
      </PageApp>
    </BrowserRouter>
  );
};

export default router;
