import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/sign-in" element={<SignIn />} />
			<Route path="/sign-up" element={<SignUp />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/projects" element={<Projects />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
