import Popover from '@material-ui/core/Popover';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import React from 'react';
import * as EmailValidator from 'email-validator';
import { db } from '../firebase';

function CreateChatInput({ user, chatsSnapshot }) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSubmit = (event) => {
		const inputValue = event.target.value;
		if (
			EmailValidator.validate(inputValue) &&
			inputValue !== user.email &&
			!checkExistingChat(inputValue)
		) {
			db.collection('chats').add({
				users: [user.email, inputValue],
			});
		}
	};

	const checkExistingChat = (targetEmail) =>
		!!chatsSnapshot?.docs.find(
			(chat) =>
				chat.data().users.find((user) => user === targetEmail)?.length > 0
		);

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return [
		<ChattingButton id="create-chat-button" onClick={handleClick}>
			새 채팅 시작하기
		</ChattingButton>,
		<PopoverContainer
			id={id}
			open={open}
			anchorEl={anchorEl}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
		>
			<InputForm>
				<InputMessage>
					채팅을 시작하고 싶은 유저의 이메일을 입력해주세요.
				</InputMessage>
				<Input />
				<InputSubmit onSubmit={handleSubmit}>확인</InputSubmit>
			</InputForm>
		</PopoverContainer>,
	];
}

export default CreateChatInput;

const ChattingButton = styled(Button)`
	width: 100%;
	&&& {
		border-bottom: 1px solid whitesmoke;
		border-top: 1px solid whitesmoke;
	}
`;

const PopoverContainer = styled(Popover)``;

const InputForm = styled.form`
	width: 480px;
	height: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const InputMessage = styled.label``;

const Input = styled.input`
	width: 80%;
	:focus {
		outline: none;
	}
`;

const InputSubmit = styled.button`
	width: 25%;
	cursor: pointer;
`;
