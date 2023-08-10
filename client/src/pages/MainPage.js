import React from "react";

import Question from "../components/Question";

const MainPage = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Question />
		</div>
	);
};

export default MainPage;
