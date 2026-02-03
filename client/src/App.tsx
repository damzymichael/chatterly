import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/auth/Signup"
import { LoginForm } from "./pages/auth/Login"
import { Toaster } from "sonner"
import { ThemeProvider, useTheme } from "./components/theme-provider"
import VerifyEmail from "./pages/auth/VerifyEmail"
import ChatLayout from "./components/ChatLayout"

// Todo Create new chat route
function App() {
    const { theme } = useTheme()
    const isAuthenticated = true
    return (
        <ThemeProvider defaultTheme="system" storageKey="vintage-ui-key">
            <BrowserRouter>
                <Toaster position="top-center" theme={theme} />
                {!isAuthenticated ? (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login" element={<LoginForm />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="verify-email" element={<VerifyEmail />} />
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route element={<ChatLayout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="login" element={<LoginForm />} />
                            <Route path="signup" element={<Signup />} />
                            <Route path="verify-email" element={<VerifyEmail />} />
                        </Route>
                    </Routes>
                )}
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
