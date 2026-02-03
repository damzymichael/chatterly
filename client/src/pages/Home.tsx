import { Button } from "@/components/ui/button"

function Home() {
    return (
        <div>
            <section className="flex items-center justify-center h-[50vh]">
                <Button
                    variant="outline"
                    className="w-max rounded-3xl flex items-center justify-center"
                >
                    Click here
                </Button>
            </section>
        </div>
    )
}

export default Home
