import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Component from "./component.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/mercury" element={<Component planet="0" />} />
      <Route path="/venus" element={<Component planet="1" />} />
      <Route path="/earth" element={<Component planet="2" />} />
      <Route path="/mars" element={<Component planet="3" />} />
      <Route path="/jupiter" element={<Component planet="4" />} />
      <Route path="/saturn" element={<Component planet="5" />} />
      <Route path="/uranus" element={<Component planet="6" />} />
      <Route path="/neptune" element={<Component planet="7" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
