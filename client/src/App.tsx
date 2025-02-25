import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ui/theme-provider';
import { Toaster } from './components/ui/toaster';
import { AuthProvider } from './contexts/AuthContext';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './pages/Dashboard';
import { Inventory } from './pages/Inventory';
import { Profile } from './pages/Profile';
import { Leaderboard } from './pages/Leaderboard';
import { Challenges } from './pages/Challenges';
import { Community } from './pages/Community';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NutriPlanner } from './pages/NutriPlanner';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider defaultTheme="light" storageKey="ui-theme">
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Dashboard />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="profile" element={<Profile />} />
                <Route path="leaderboard" element={<Leaderboard />} />
                <Route path="challenges" element={<Challenges />} />
                <Route path="community" element={<Community />} />
                <Route path="nutriplanner" element={<NutriPlanner />} />
              </Route>
            </Routes>
            <Toaster />
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
