import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { EyeOffIcon, EyeIcon, Mail, Lock } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"

// Todo password parameters
// Todo Fix top padding
const loginSchema = z.object({
    email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(
            /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
            "Password must contain at least one special character",
        ),
})

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "", password: "" },
    })

    function onSubmit(data: z.infer<typeof loginSchema>) {
        if (false) console.log(data)
        toast.success("Success")
        form.reset()
    }
    return (
        <div className="min-h-screen pt-20 gap-4 px-4 bg-background">
            <div className="max-w-[600px] mx-auto">
                <Card className="shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold">Vintage Chat</CardTitle>
                        <CardDescription className="text-primary dark:text-white text-lg">
                            Welcome back to your messages
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FieldGroup>
                                <Controller
                                    name="email"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="email">Email</FieldLabel>
                                            <InputGroup>
                                                <InputGroupAddon align="inline-start">
                                                    <Mail />
                                                </InputGroupAddon>
                                                <InputGroupInput
                                                    {...field}
                                                    aria-invalid={fieldState.invalid}
                                                    id="email"
                                                    type="email"
                                                    placeholder="m@example.com"
                                                />
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name="password"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <div className="flex items-center">
                                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                                <a
                                                    href="#"
                                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                                >
                                                    Forgot your password?
                                                </a>
                                            </div>
                                            <InputGroup>
                                                <InputGroupAddon align="inline-start">
                                                    <Lock />
                                                </InputGroupAddon>
                                                <InputGroupInput
                                                    {...field}
                                                    aria-invalid={fieldState.invalid}
                                                    id="password"
                                                    type={showPassword ? "text" : "password"}
                                                    // placeholder="••••••••"
                                                    placeholder="Enter password"
                                                />
                                                <InputGroupAddon
                                                    className="cursor-pointer"
                                                    align="inline-end"
                                                    onClick={() =>
                                                        setShowPassword(
                                                            (showPassword) => !showPassword,
                                                        )
                                                    }
                                                >
                                                    {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                                                </InputGroupAddon>
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                            </FieldGroup>
                            <Field orientation="horizontal" className="mt-4 mb-6">
                                <Checkbox id="remember-me" name="remember-me" />
                                <Label htmlFor="remember-me">Remember me</Label>
                            </Field>
                            <Field>
                                <Button type="submit" className="font-semibold">
                                    Login
                                </Button>
                                {/* <Button variant="outline" type="button">
                  Login with Google
                </Button> */}
                                <FieldDescription className="text-center">
                                    Don&apos;t have an account? <a href="#">Sign up</a>
                                </FieldDescription>
                            </Field>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
