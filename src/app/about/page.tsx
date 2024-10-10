import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
    <main className="bg-gray-700">
    <div className="flex flex-col items-center justify-center h-screen">
      <Button variant="destructive" size="lg">Click me</Button>
    </div>
    </main>
    </>
  );
}
