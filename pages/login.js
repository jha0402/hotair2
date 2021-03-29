import styled from 'styled-components';
import Head from 'next/head';
import { Button } from '@material-ui/core';

function Login() {
	return (
		<Container>
			<Head>
				<title>Login</title>
			</Head>

			<LoginContainer>
				<Logo src="https://i.pinimg.com/originals/df/1e/9d/df1e9db4b1d9c3cfac6fac8dec634bf7.png" />
				<GoogleButton>구글 로그인</GoogleButton>
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
`;

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #20354d;
`;

const GoogleButton = styled(Button);

const Logo = styled.img`
	width: 200px;
	height: 100px;
	margin-bottom: 50px;
`;
