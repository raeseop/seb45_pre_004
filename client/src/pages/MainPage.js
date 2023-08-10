import React from "react";

import Question from "../components/Question";

const MainPage = () => {
	return (
		// 렌더링 테스트를 위해 임시로 적용해 두었습니다! 필요시 삭제 부탁드립니다.
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
