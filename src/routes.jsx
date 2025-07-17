import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import UserRegistration from "pages/user-registration";
import UserLogin from "pages/user-login";
import ContentManagementSystem from "pages/content-management-system";
import AnalyticsReporting from "pages/analytics-reporting";
import SubscriptionManagement from "pages/subscription-management";
import DigitalProductMarketplace from "pages/digital-product-marketplace";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<DigitalProductMarketplace />} />
        <Route path="/user-registration" element={<UserRegistration />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/content-management-system" element={<ContentManagementSystem />} />
        <Route path="/analytics-reporting" element={<AnalyticsReporting />} />
        <Route path="/subscription-management" element={<SubscriptionManagement />} />
        <Route path="/digital-product-marketplace" element={<DigitalProductMarketplace />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;