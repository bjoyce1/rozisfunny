import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import PressKit from "./pages/PressKit";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        {/* Legacy multi-page routes now live as scroll sections on the home page */}
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/shows" element={<Navigate to="/#tour" replace />} />
        <Route path="/videos" element={<Navigate to="/#reel" replace />} />
        <Route path="/press" element={<PressKit />} />
        <Route path="/press-kit" element={<PressKit />} />
        <Route path="/contact" element={<Navigate to="/#book" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
