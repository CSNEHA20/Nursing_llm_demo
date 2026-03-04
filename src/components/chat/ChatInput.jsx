import React, { useState } from 'react';
import { Send, Mic } from 'lucide-react';

export default function ChatInput({ onSend }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSend(inputValue);
            setInputValue('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="w-full max-w-3xl px-4 sm:px-6">
            <form
                onSubmit={handleSubmit}
                className="relative flex items-end w-full rounded-2xl border border-primary/20 bg-white shadow-sm focus-within:ring-1 focus-within:ring-primary/30 focus-within:border-primary/40 transition-shadow transition-colors"
            >
                <div className="flex-1 max-h-48 overflow-y-auto">
                    <textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Message Nursing AI..."
                        className="w-full bg-transparent border-0 focus:ring-0 py-3.5 pl-4 pr-12 text-sm sm:text-base resize-none custom-scrollbar outline-none min-h-[52px]"
                        rows={1}
                        style={{ height: '52px' }}
                    />
                </div>
                <div className="absolute right-2 bottom-1.5 flex flex-row items-center gap-1">
                    <button
                        type="button"
                        className="p-2 text-text_secondary/80 hover:text-primary transition-colors rounded-xl"
                        title="Voice Input (Placeholder)"
                    >
                        <Mic size={18} />
                    </button>
                    <button
                        type="submit"
                        disabled={!inputValue.trim()}
                        className="p-2 bg-primary text-white rounded-xl disabled:opacity-50 disabled:bg-primary/60 hover:bg-primary/90 transition-all flex items-center justify-center"
                    >
                        <Send size={16} className="ml-0.5" />
                    </button>
                </div>
            </form>
            <div className="text-center mt-2.5 text-xs text-text_secondary/80">
                Nursing AI Assistant can make mistakes. Consider verifying important clinical information.
            </div>
        </div>
    );
}
