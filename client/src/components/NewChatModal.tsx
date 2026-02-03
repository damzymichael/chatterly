import { useState } from "react"
import { Search, X, Check } from "lucide-react"

interface User {
    id: string
    name: string
    email: string
    avatar: string
}

interface NewChatModalProps {
    onClose: () => void
}

export default function NewChatModal({ onClose }: NewChatModalProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedUsers, setSelectedUsers] = useState<string[]>([])

    const users: User[] = [
        {
            id: "5",
            name: "Lisa Anderson",
            email: "lisa@example.com",
            avatar: "👩‍⚕️",
        },
        {
            id: "6",
            name: "Tom Brown",
            email: "tom@example.com",
            avatar: "👨‍🏫",
        },
        {
            id: "7",
            name: "Rachel Green",
            email: "rachel@example.com",
            avatar: "👩‍💻",
        },
    ]

    const toggleUser = (userId: string) => {
        setSelectedUsers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
    }

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-xl">
                {/* Header */}
                <div className="p-6 border-b border-vintage-tan flex items-center justify-between">
                    <h2 className="text-xl font-bold text-vintage-dark-brown">New Chat</h2>
                    <button onClick={onClose} className="p-2 hover:bg-vintage-cream rounded-lg transition-colors">
                        <X className="w-5 h-5 text-vintage-brown" />
                    </button>
                </div>

                {/* Search */}
                <div className="p-4 border-b border-vintage-tan">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-vintage-tan" />
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-vintage-cream border border-vintage-tan rounded-lg focus:outline-none focus:ring-2 focus:ring-vintage-accent-teal text-sm text-vintage-dark-brown"
                        />
                    </div>
                </div>

                {/* User List */}
                <div className="max-h-64 overflow-y-auto">
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                            <button
                                key={user.id}
                                onClick={() => toggleUser(user.id)}
                                className="w-full px-4 py-3 border-b border-vintage-tan hover:bg-vintage-cream transition-colors flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-vintage-tan rounded-full flex items-center justify-center text-lg">
                                        {user.avatar}
                                    </div>
                                    <div className="text-left">
                                        <p className="font-medium text-vintage-dark-brown">{user.name}</p>
                                        <p className="text-xs text-vintage-brown">{user.email}</p>
                                    </div>
                                </div>
                                {selectedUsers.includes(user.id) && (
                                    <div className="w-5 h-5 bg-vintage-accent-teal rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-vintage-cream" />
                                    </div>
                                )}
                            </button>
                        ))
                    ) : (
                        <div className="p-8 text-center">
                            <p className="text-vintage-brown">No users found</p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-vintage-tan flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2 border border-vintage-tan text-vintage-dark-brown font-medium rounded-lg hover:bg-vintage-cream transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        disabled={selectedUsers.length === 0}
                        className="flex-1 px-4 py-2 bg-vintage-brown hover:bg-vintage-dark-brown text-vintage-cream font-medium rounded-lg transition-colors disabled:opacity-50"
                    >
                        Start Chat
                    </button>
                </div>
            </div>
        </div>
    )
}
