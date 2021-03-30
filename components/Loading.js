import { Circle } from 'better-react-spinkit';

function Loading() {
	return (
		<center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
			<div>
				<img
					src="https://img.icons8.com/color/452/google-logo.png"
					height={200}
					width={200}
					style={{ marginBottom: 16 }}
				/>
				<Circle color="#db4437" size={60} />
			</div>
		</center>
	);
}

export default Loading;
