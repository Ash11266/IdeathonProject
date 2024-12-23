import React, { useEffect, useRef } from 'react';
import { useChatStore } from '../store/chatStore';
import { ChatHeader } from './ChatHeader';
import { MessageBubble } from './MessageBubble';
import { MessageInput } from './MessageInput';

export const ChatRoom: React.FC = () => {
  const {
    messages,
    users,
    isConnected,
    sendMessage,
    currentRoom,
    socket
  } = useChatStore();
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!isConnected || !currentRoom || !socket) {
    return null;
  }

  return (
    <div className="flex flex-col h-[500px] w-full max-w-2xl bg-white rounded-lg shadow-lg">
      <ChatHeader userCount={users} />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            message={msg}
            isOwnMessage={msg.userId === socket.id}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <MessageInput onSendMessage={sendMessage} />
    </div>
  );
};