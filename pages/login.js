import styled from 'styled-components';
import Head from 'next/head';
import { auth, provider } from '../firebase';

function Login() {
	const signIn = () => {
		auth.signInWithPopup(provider).catch(alert);
	};
	return (
		<Container>
			<Head>
				<title>Login</title>
			</Head>

			<LoginContainer>
				<Logo src="https://i.pinimg.com/originals/df/1e/9d/df1e9db4b1d9c3cfac6fac8dec634bf7.png" />
				<GoogleButton onClick={signIn}>
					<GoogleLogo src="https://simpleicons.org/icons/google.svg" />
					구글 로그인
				</GoogleButton>
			</LoginContainer>
		</Container>
	);
}

export default Login;

const Container = styled.div`
	background: #364f6b;
	color: whitesmoke;
	display: grid;
	place-items: center;
	height: 100vh;

	.MuiButton-root {
		background-color: whitesmoke;
		:hover {
			opacity: 0.7;
		}
	}
`;

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #253e59;
	padding: 100px;
	align-items: center;
	border-radius: 8px;
	box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const GoogleButton = styled.button`
	padding: 8px;
	border-radius: 8px;
	cursor: pointer;
	font-size: 16px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: #db4437;
	color: whitesmoke;
	border: 1px solid black;
	:hover {
		opacity: 0.7;
	}
	:focus {
		outline: none;
	}
`;

const Logo = styled.img`
	width: 200px;
	height: 100px;
	margin-bottom: 50px;
`;
const GoogleLogo = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 8px;
`;
