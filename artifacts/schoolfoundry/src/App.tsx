import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HomePage from "@/pages/home";
import OfflinePage from "@/pages/offline";
import OnlinePage from "@/pages/online";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import WorkWithUsPage from "@/pages/work-with-us";
import AgentsPage from "@/pages/agents";
import LegalPage from "@/pages/legal";
import ZambiaCampaignPage from "@/pages/campaigns/zambia";
import ZimbabweCampaignPage from "@/pages/campaigns/zimbabwe";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/offline" component={OfflinePage} />
          <Route path="/online" component={OnlinePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/work-with-us" component={WorkWithUsPage} />
          <Route path="/agents" component={AgentsPage} />
          <Route path="/legal" component={LegalPage} />
          <Route path="/campaigns/zambia" component={ZambiaCampaignPage} />
          <Route path="/campaigns/zimbabwe" component={ZimbabweCampaignPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
