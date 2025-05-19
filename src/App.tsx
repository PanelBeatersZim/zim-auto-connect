
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ListingDetail from "./pages/ListingDetail";
import CategoryPage from "./pages/CategoryPage";
import CityPage from "./pages/CityPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import PricingPage from "./pages/PricingPage";
import AddListingPage from "./pages/AddListingPage";
import ClaimListingPage from "./pages/ClaimListingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/listing/:slug" element={<ListingDetail />} />
          <Route path="/services/:category" element={<CategoryPage />} />
          <Route path="/city/:cityname" element={<CityPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/add-listing" element={<AddListingPage />} />
          <Route path="/claim/:listing" element={<ClaimListingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
