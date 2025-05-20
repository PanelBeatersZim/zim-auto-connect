import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
import DashboardLayout from "./pages/Dashboard/Layout";
import DashboardHomePage from "./pages/Dashboard/index";
import MyListings from "./pages/Dashboard/MyListings";
import Subscriptions from "./pages/Dashboard/Subscriptions";
import Claims from "./pages/Dashboard/Claims";
import Settings from "./pages/Dashboard/Settings";
import Support from "./pages/Dashboard/Support";
import AdminPanel from "./pages/Dashboard/AdminPanel";
import AuthPage from "./pages/AuthPage";
import { AuthProvider } from "./components/AuthProvider";
import WhyTrustUsPage from "./pages/WhyTrustUsPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import BrowseAllPage from "./pages/BrowseAllPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Header />
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
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            {/* Dashboard routes (protected) */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHomePage />} />
              <Route path="listings" element={<MyListings />} />
              <Route path="subscriptions" element={<Subscriptions />} />
              <Route path="claims" element={<Claims />} />
              <Route path="settings" element={<Settings />} />
              <Route path="support" element={<Support />} />
              <Route path="admin" element={<AdminPanel />} />
            </Route>
            <Route path="/why-trust-us" element={<WhyTrustUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/browse-all" element={<BrowseAllPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
