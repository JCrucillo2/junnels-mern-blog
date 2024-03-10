import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<div className="root-layout">
			<header>
				<h1>Sample Header</h1>
			</header>

			<main>
				<Outlet />
			</main>
		</div>
	);
};
export default RootLayout;
