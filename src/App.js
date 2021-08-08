import { Fragment, useState } from "react";
import Layout from "./components/layout/Layout";
import Notification from "./components/notification/Notification";

function App() {
	const [show, setShow] = useState(false);

	return (
		<Fragment>
			<Layout setShow={setShow} />
			<Notification show={show} setShow={setShow} />
		</Fragment>
	);
}

export default App;
