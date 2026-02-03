import { useState } from "react"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import { Plus, Search, LogOut, Menu, X } from "lucide-react"
import ChatList from "./ChatList"
import NewChatModal from "./NewChatModal"

function ChatLayout() {
    const [showNewChat, setShowNewChat] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const { chatId } = useParams()
    const navigate = useNavigate()
    const isMobileView = window.innerWidth < 768
    return (
        <div className="flex h-screen bg-vintage-cream">
            {/* Sidebar */}
            <aside
                className={`${
                    isMobileView && chatId ? "hidden" : "flex"
                } w-full md:w-96 flex-col bg-white border-r border-vintage-tan md:relative absolute inset-0 z-20`}
            >
                {/* Header */}
                <div className="p-4 border-b border-vintage-tan">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-vintage-brown rounded-lg flex items-center justify-center">
                                <span className="text-lg text-vintage-cream font-bold">VC</span>
                            </div>
                            <h1 className="text-xl font-bold text-vintage-dark-brown">Messages</h1>
                        </div>
                        {isMobileView && (
                            <button
                                onClick={() => setShowMobileMenu(false)}
                                className="md:hidden p-2 hover:bg-vintage-cream rounded-lg"
                            >
                                <X className="w-5 h-5 text-vintage-brown" />
                            </button>
                        )}
                    </div>

                    {/* Search and New Chat */}
                    <div className="flex gap-2">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-vintage-tan" />
                            <input
                                type="text"
                                placeholder="Search chats..."
                                className="w-full pl-10 pr-4 py-2 bg-vintage-cream border border-vintage-tan rounded-lg focus:outline-none focus:ring-2 focus:ring-vintage-accent-teal text-sm text-vintage-dark-brown"
                            />
                        </div>
                        <button
                            onClick={() => setShowNewChat(true)}
                            className="p-2 bg-vintage-brown hover:bg-vintage-dark-brown text-vintage-cream rounded-lg transition-colors"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Chat List */}
                <ChatList
                    onSelectChat={(id) => {
                        navigate(`/chat/${id}`)
                        if (isMobileView) setShowMobileMenu(false)
                    }}
                />

                {/* Footer */}
                <div className="p-4 border-t border-vintage-tan">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-vintage-brown hover:bg-vintage-cream rounded-lg transition-colors">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Mobile Header */}
                {isMobileView && chatId && (
                    <div className="flex items-center gap-4 p-4 border-b border-vintage-tan bg-white">
                        <button onClick={() => navigate("/chat")} className="p-2 hover:bg-vintage-cream rounded-lg">
                            <Menu className="w-5 h-5 text-vintage-brown" />
                        </button>
                        <div className="flex-1 h-10 bg-vintage-cream rounded-lg" />
                    </div>
                )}

                {/* Chat Content */}
                <Outlet />
            </div>

            {/* New Chat Modal */}
            {showNewChat && <NewChatModal onClose={() => setShowNewChat(false)} />}
        </div>
    )
}

export default ChatLayout
