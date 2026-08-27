import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#fff8f1] text-[#1d1e1c] tracking-[0.015em] selection:bg-[#fee3b5] selection:text-[#fa5d00] p-4">
      <Card className="w-full max-w-md mx-4 bg-white rounded-[20px] border border-[#c0bbb6]/30 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
        <CardContent className="pt-6 sm:pt-8 p-6 sm:p-8">
          <div className="flex mb-4 gap-3 items-center">
            <AlertCircle className="h-8 w-8 text-[#fa5d00] shrink-0" />
            <h1 className="text-2xl font-bold text-[#1d1e1c] tracking-tight">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-[#615f5c] leading-relaxed">
            Did you forget to add the page to the router?
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
