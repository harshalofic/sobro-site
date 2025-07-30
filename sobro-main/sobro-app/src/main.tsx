import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './App.css';
import Dashboard from './components/grants/dashboard.tsx'
import Index from "./pages/Index.tsx"
import NotFound from './pages/NotFound.tsx';
import { BrowserRouter,Routes,Route } from 'react-router'
import Profile from './components/grants/profile.tsx';
import Journey from './components/Journey/journey.tsx';
import Home from "../src/pages/TravelHomeUi.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
// Force dark theme
document.documentElement.classList.add("dark");

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
      <BrowserRouter>    
        {/* <Dashboard /> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Journey" element={<Journey />} />
            <Route path="/sobro-agent" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dash" element={<Dashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
</BrowserRouter>
</TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  );
} else {
  throw new Error("Root element with id 'root' not found");
}
