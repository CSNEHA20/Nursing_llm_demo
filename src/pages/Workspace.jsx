import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import ChatPage from '../components/chat/ChatPage';
import DashboardArea from '../components/dashboard/DashboardArea';

export default function Workspace() {
    const [activeView, setActiveView] = useState('dashboard'); // 'dashboard' | 'chat'

    const handleNewLesson = () => {
        console.log("Starting new lesson...");
        setActiveView('chat');
    };

    const handleOpenProject = (projectId) => {
        console.log(`Opening project ${projectId}`);
        setActiveView('chat');
    };

    const handleOpenConcept = (conceptStr) => {
        console.log(`Opening concept ${conceptStr}`);
        setActiveView('chat');
    };

    return (
        <div className="flex h-screen w-full bg-background overflow-hidden relative text-text_primary">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">
                <TopBar />
                {activeView === 'dashboard' ? (
                    <DashboardArea
                        onNewLesson={handleNewLesson}
                        onOpenProject={handleOpenProject}
                        onOpenConcept={handleOpenConcept}
                    />
                ) : (
                    <ChatPage />
                )}
            </div>
        </div>
    );
}
