import styled from 'styled-components';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';

function Sidebar() {
	return (
		<div>
			<Container>
				<Head>
					<UserPhoto />
					<Icons>
						<IconButton>
							<ChatIcon />
							<MoreVertIcon />
						</IconButton>
					</Icons>
				</Head>
			</Container>
		</div>
	);
}

export default Sidebar;

/* ---------- Styling ---------- */

const Container = styled.div``;

const Head = styled.div``;

const Icons = styled.div``;

const UserPhoto = styled(Avatar)``;
