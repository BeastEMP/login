# 🔐 Secure Authentication System

A modern, full-stack authentication system built with React, Convex, and TypeScript. Features secure user registration, login, and a protected dashboard with real-time updates.

## ✨ Features

- **🔒 Secure Authentication**: Password-based authentication with Convex Auth
- **👤 User Registration**: Create new accounts with email and password
- **🏠 Protected Dashboard**: Secure user dashboard with personal information
- **📊 User Statistics**: Display join date, email, and profile information
- **✏️ Profile Management**: Update user profile information
- **🎨 Modern UI**: Clean, responsive design with Tailwind CSS
- **⚡ Real-time Updates**: Live data synchronization with Convex
- **📱 Responsive Design**: Works seamlessly on desktop and mobile

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Backend**: Convex (Database, Auth, Real-time)
- **Authentication**: Convex Auth
- **Styling**: Tailwind CSS
- **Notifications**: Sonner
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd secure-auth-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Convex**
   ```bash
   npx convex dev
   ```
   This will:
   - Create a new Convex project
   - Set up authentication
   - Deploy the backend functions

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
├── convex/                 # Backend functions and schema
│   ├── auth.config.ts     # Auth configuration (DO NOT MODIFY)
│   ├── auth.ts           # Auth setup (DO NOT MODIFY)
│   ├── schema.ts         # Database schema
│   ├── users.ts          # User-related functions
│   └── http.ts           # HTTP handlers
├── src/
│   ├── components/        # React components
│   │   ├── Dashboard.tsx  # Protected dashboard
│   │   └── RegisterForm.tsx # User registration
│   ├── SignInForm.tsx    # Login form (DO NOT MODIFY)
│   ├── SignOutButton.tsx # Logout button (DO NOT MODIFY)
│   ├── App.tsx           # Main application
│   └── main.tsx          # App entry point (DO NOT MODIFY)
├── package.json
└── README.md
```

## 🔧 Configuration

### Environment Variables

The project uses Convex's built-in environment management. No additional environment variables are required for basic functionality.

### Customization

#### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Component-specific styles are in individual files

#### Authentication
- User schema is defined in `convex/schema.ts`
- Auth functions are in `convex/users.ts`
- Frontend auth components are in `src/components/`

## 📊 Database Schema

The application uses Convex's built-in auth tables plus custom user functions:

```typescript
// Built-in auth tables (automatic)
users: {
  name?: string
  email?: string
  image?: string
  emailVerificationTime?: number
  phone?: string
  phoneVerificationTime?: number
  isAnonymous?: boolean
}
```

## 🔐 Security Features

- ✅ Secure password authentication
- ✅ Protected user sessions
- ✅ Encrypted data storage
- ✅ Real-time authentication state
- ✅ Input validation and sanitization
- ✅ CSRF protection (built into Convex)

## 🎯 Available Scripts

- `npm run dev` - Start development server (frontend + backend)
- `npm run dev:frontend` - Start only frontend
- `npm run dev:backend` - Start only Convex backend
- `npm run lint` - Run TypeScript and build checks

## 📱 Usage

### For Users

1. **Registration**: Click "Create one here" to register a new account
2. **Login**: Enter email and password to sign in
3. **Dashboard**: Access your protected dashboard after authentication
4. **Profile**: Update your profile information from the dashboard
5. **Logout**: Use the logout button in the header

### For Developers

#### Adding New Features

1. **Database Changes**: Update `convex/schema.ts`
2. **Backend Functions**: Add to `convex/` directory
3. **Frontend Components**: Add to `src/components/`
4. **Styling**: Use Tailwind classes or update CSS files

#### Key Functions

```typescript
// Get current user
const user = useQuery(api.auth.loggedInUser);

// Update user profile
const updateProfile = useMutation(api.users.updateProfile);

// Get user statistics
const userStats = useQuery(api.users.getUserStats);
```

## 🚨 Important Notes

### Protected Files
These files are locked and should NOT be modified:
- `convex/auth.config.ts`
- `convex/auth.ts`
- `src/SignInForm.tsx`
- `src/SignOutButton.tsx`
- `src/main.tsx`

### Authentication Flow
1. User registers/logs in through forms
2. Convex Auth handles authentication
3. Protected routes check auth state
4. Dashboard displays user-specific data

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Run `npm run lint` to check for TypeScript errors
2. **Auth Not Working**: Ensure Convex backend is running (`npx convex dev`)
3. **Styling Issues**: Check Tailwind CSS configuration
4. **Database Errors**: Verify schema matches your data structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Convex](https://convex.dev) for the backend infrastructure
- [Tailwind CSS](https://tailwindcss.com) for styling
- [React](https://react.dev) for the frontend framework
- [Sonner](https://sonner.emilkowal.ski) for notifications

---
> Created with ❤️ by **Aditya Yeola**
