import Bubble from "./Bubble";
import ChatInput from "./ChatInput";


export default function ChatBot() {
  return (
    <div className="flex flex-col h-full justify-between bg-gray-200">
      <Bubble message={"hello how can i asssite you today !!!"}/>
      <ChatInput/>
    </div>
  );
}