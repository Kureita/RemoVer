import { Button } from "@/components/ui/button";
import Image from "next/image";
import { inngest } from "@/inngest/client"; 
import { SendIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      <Button variant="default" aria-label="Submit">
        <span>Invoke Function</span>
        <SendIcon />
      </Button>
    </div>
  );
}
