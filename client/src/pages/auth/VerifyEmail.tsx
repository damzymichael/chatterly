import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Mail } from "lucide-react"

function VerifyEmail() {
    return (
        <div className="min-h-screen py-18 gap-4 px-4 bg-background">
            <div className="max-w-[600px] mx-auto">
                <Card>
                    <CardHeader className="text-center">
                        <div className="size-12 bg-accent rounded-xl mx-auto mb-4 flex items-center justify-center">
                            <Mail className="w-8 h-8 text-background" />
                        </div>
                        <CardTitle className="text-3xl font-bold text-foreground mb-2 text-center">
                            Verify Your Email
                        </CardTitle>
                        <CardDescription className="text-xl">
                            Enter verification code
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="otp" className="sr-only">
                                        Verification code
                                    </FieldLabel>
                                    <InputOTP maxLength={6} id="otp">
                                        <InputOTPGroup className="gap-2.5 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border mx-auto">
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                    <FieldDescription className="text-center">
                                        Enter the 6-digit code sent to your email.
                                    </FieldDescription>
                                </Field>
                                <Button type="submit">Verify</Button>
                                <FieldDescription className="text-center">
                                    Didn&apos;t receive the code? <a href="#">Resend</a>
                                </FieldDescription>
                            </FieldGroup>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p className="text-primary text-center text-sm mx-auto">
                            Resend code in <span className="font-bold">2:45</span>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default VerifyEmail
