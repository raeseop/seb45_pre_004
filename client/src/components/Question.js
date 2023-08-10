import {
	Wrapper,
	Current,
	Container,
	Contents,
	Info,
} from "../styles/question";

export default function Question({ item }) {
	return (
		<>
			<Wrapper>
				<Current>
					<div>1 {/* item.answer.length */} Answers</div>
					<div>6 {/* item.views */} views</div>
				</Current>
				<Container>
					<Contents>
						<h1>
							Camera plugin in flutter making callback after taking picture
							{/* item.title */}
						</h1>
						<div>
							I am trying to capture image using camera in flutter. Image should
							be captured, for that using takePicture method. I am understanding
							whether the image is capturing or not, in debug, I got ...
							{/* item.content.slice(0, 100) */}
						</div>
					</Contents>
					<Info>
						<div>Nanda Y {/* item.author */}</div>
						<div>
							-<div>21 {/* item.asked.length */} asked</div>
							<div>58 secs ago</div>
						</div>
					</Info>
				</Container>
			</Wrapper>
		</>
	);
}
