import styled from 'styled-components';
import { Avatar, Button, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {
	return (
		<div>
			<Container>
				<Head>
					<UserPhoto />
					<Icons>
						<IconButton>
							<ChatIcon />
						</IconButton>
						<IconButton>
							<MoreVertIcon />
						</IconButton>
					</Icons>
				</Head>

				<Search>
					<SearchIcon />
					<SearchInput placeholder="채팅 검색" />
				</Search>

				<ChattingButton>새 채팅 시작하기</ChattingButton>
			</Container>
		</div>
	);
}

export default Sidebar;

/* ---------- Styling ---------- */

const Container = styled.div``;

const Head = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	height: 80px;
	padding: 8px;
	z-index: 1;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid whitesmoke;
`;

const Icons = styled.div``;

const UserPhoto = styled(Avatar)`
	cursor: pointer;
	:hover {
		opacity: 0.7;
	}
`;

const Search = styled.div`
	display: flex;
	padding: 16px;
	align-items: center;
`;

const SearchInput = styled.input`
	flex: 1;
	border: none;
	:focus {
		outline: none;
	}
`;

const ChattingButton = styled(Button)`
	width: 100%;
	&&& {
		border-bottom: 1px solid whitesmoke;
		border-top: 1px solid whitesmoke;
	}
`;
