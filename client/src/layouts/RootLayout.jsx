import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import FooterCom from "../components/Footer";

const RootLayout = () => {
	return (
		<div className="root-layout">
			<Header />

			<main>
				<Outlet />
			</main>

			<FooterCom />
		</div>
	);
};
export default RootLayout;
