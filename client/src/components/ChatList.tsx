import { useState } from "react"
import { formatDistanceToNow } from "date-fns"

interface Chat {
    id: string
    name: string
    avatar: string
    lastMessage: string
    timestamp: Date
    isOnline: boolean
    unreadCount: number
}

interface ChatListProps {
    onSelectChat: (id: string) => void
}

function ChatList({ onSelectChat }: ChatListProps) {
    const [chats] = useState<Chat[]>([
        {
            id: "1",
            name: "Sarah Johnson",
            avatar: "👩‍💼",
            lastMessage: "That sounds great! Can we discuss it tomorrow?",
            timestamp: new Date(Date.now() - 1000 * 60 * 5),
            isOnline: true,
            unreadCount: 2,
        },
        {
            id: "2",
            name: "Alex Chen",
            avatar: "👨‍💻",
            lastMessage: "Sure, see you at 3 PM",
            timestamp: new Date(Date.now() - 1000 * 60 * 30),
            isOnline: true,
            unreadCount: 0,
        },
        {
            id: "3",
            name: "Emma Davis",
            avatar: "👩‍🎨",
            lastMessage: "I sent you the design files",
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
            isOnline: false,
            unreadCount: 0,
        },
        {
            id: "4",
            name: "Mike Wilson",
            avatar: "👨‍🔬",
            lastMessage: "Thanks for your help earlier",
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
            isOnline: false,
            unreadCount: 1,
        },
    ])

    return (
        <div className="flex-1 overflow-y-auto">
            {chats.map((chat) => (
                <button
                    key={chat.id}
                    onClick={() => onSelectChat(chat.id)}
                    className="w-full px-4 py-3 border-b border-vintage-tan hover:bg-vintage-cream transition-colors text-left"
                >
                    <div className="flex items-start gap-3">
                        {/* Avatar with Online Indicator */}
                        <div className="relative flex-shrink-0">
                            <div className="w-12 h-12 bg-vintage-tan rounded-full flex items-center justify-center text-xl">
                                {chat.avatar}
                            </div>
                            <div
                                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                                    chat.isOnline ? "bg-green-500" : "bg-gray-400"
                                }`}
                            />
                        </div>

                        {/* Chat Info */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="font-semibold text-vintage-dark-brown truncate">{chat.name}</h3>
                                <span className="text-xs text-vintage-brown flex-shrink-0 ml-2">
                                    {chat.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-vintage-brown truncate">{chat.lastMessage}</p>
                                {chat.unreadCount > 0 && (
                                    <div className="flex-shrink-0 w-5 h-5 bg-vintage-accent-teal text-vintage-cream text-xs rounded-full flex items-center justify-center font-bold ml-2">
                                        {chat.unreadCount}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </button>
            ))}
        </div>
    )
}

export default ChatList
