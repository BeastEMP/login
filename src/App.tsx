import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { RegisterForm } from "./components/RegisterForm";
import { Dashboard } from "./components/Dashboard";
import { Toaster } from "sonner";
import { useState } from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm h-16 flex justify-between items-center border-b shadow-sm px-4">
        <h2 className="text-xl font-semibold text-primary">🔐 Auth System</h2>
        <Authenticated>
          <SignOutButton />
        </Authenticated>
      </header>
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl mx-auto">
          <Content />
        </div>
      </main>
      <Toaster />
    </div>
  );
}

function Content() {
  const loggedInUser = useQuery(api.auth.loggedInUser);
  const [showRegister, setShowRegister] = useState(false);

  if (loggedInUser === undefined) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <Authenticated>
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome Back! 👋
          </h1>
          <p className="text-xl text-gray-600">
            Hello, {loggedInUser?.name || loggedInUser?.email || "User"}
          </p>
        </div>
        <Dashboard />
      </Authenticated>

      <Unauthenticated>
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-primary mb-4">
            🔐 Secure Login System
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            {showRegister ? "Create your account" : "Sign in to access your dashboard"}
          </p>
          <p className="text-sm text-gray-500">
            Created By Aditya Yeola 
          </p>
        </div>

        {showRegister ? (
          <RegisterForm onSwitchToLogin={() => setShowRegister(false)} />
        ) : (
          <div className="space-y-6">
            <SignInForm />
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={() => setShowRegister(true)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Create one here
                </button>
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-3">🔒 Security Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Secure password authentication</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Protected user sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Encrypted data storage</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Real-time authentication</span>
            </div>
          </div>
        </div>
      </Unauthenticated>
    </div>
  );
}
