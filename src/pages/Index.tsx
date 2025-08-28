import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { StatuteSidebar } from "@/components/StatuteSidebar";
import { ChatHistorySidebar } from "@/components/ChatHistorySidebar";
import { ChatInterface } from "@/components/ChatInterface";
import { Scale } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-background">
        <StatuteSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 flex items-center justify-between px-4 border-b border-border bg-card">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <div className="flex items-center gap-2">
                <Scale className="h-6 w-6 text-legal-blue" />
                <span className="font-semibold text-lg">Law as Code</span>
              </div>
            </div>
            <div className="flex items-center">
              <SidebarTrigger />
            </div>
          </header>

          {/* Main Chat Interface */}
          <ChatInterface />
        </div>
        
        <ChatHistorySidebar />
      </div>
    </SidebarProvider>
  );
};

export default Index;
