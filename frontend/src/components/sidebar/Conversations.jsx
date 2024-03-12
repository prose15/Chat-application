import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={<IoChatbubbleEllipsesOutline />}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
};
export default Conversations;
