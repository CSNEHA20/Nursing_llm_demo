import React from 'react';
import './chat.css';

export default function ChatLayout({ headerTitle, messagesArea, inputArea }) {
    return (
        <div className="flex-1 flex flex-col bg-primary/5 relative overflow-hidden h-full">
            {/* Header Area */}
            <div className="flex-shrink-0 h-14 border-b border-primary/10 flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm z-10">
                <h2 className="text-sm font-semibold text-text_primary">{headerTitle}</h2>
            </div>

            {/* Messages Container Area */}
            <div className="flex-1 overflow-y-auto chat-scrollbar relative">
                {messagesArea}
            </div>

            {/* Input Area */}
            <div className="flex-shrink-0 bg-transparent flex justify-center pb-4 pt-2">
                {inputArea}
            </div>
        </div>
    );
}
