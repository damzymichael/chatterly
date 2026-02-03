import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/auth/Signup"
import { LoginForm } from "./pages/auth/Login"
import { Toaster } from "sonner"
import { ThemeProvider, useTheme } from "./components/theme-provider"
import VerifyEmail from "./pages/auth/VerifyEmail"

// Todo Create new chat route
function App() {
    const { theme } = useTheme()
    return (
        <ThemeProvider defaultTheme="system" storageKey="vintage-ui-key">
            <BrowserRouter>
                <Toaster position="top-center" theme={theme} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<LoginForm />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="verify-email" element={<VerifyEmail />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
