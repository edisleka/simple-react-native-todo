# ✅ Simple Todo

A modern, cross-platform todo application built with Expo and React Native. Manage your tasks effortlessly with a beautiful UI, dark mode support, and real-time synchronization powered by Convex.

![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Convex](https://img.shields.io/badge/Convex-FF3434?style=for-the-badge&logo=convex&logoColor=white)

---

## ✨ Features

- 📱 **Cross-Platform**: Works on iOS, Android, and Web
- 🌙 **Dark Mode**: Automatic theme switching with manual toggle
- ⚡ **Real-Time Sync**: Instant updates across devices using Convex
- 🎨 **Modern UI**: Beautiful interface built with NativeWind (Tailwind CSS)
- 🔄 **Full CRUD**: Create, read, update, delete, and toggle todos
- 📊 **Organized Structure**: Clean codebase with separated styles and components
- 🚀 **Type-Safe**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

### Core Technologies
- **[Expo](https://expo.dev/)** (~54.0.20) - React Native framework
- **[React Native](https://reactnative.dev/)** (0.81.5) - Mobile framework
- **[TypeScript](https://www.typescriptlang.org/)** (5.9.2) - Type safety
- **[Convex](https://www.convex.dev/)** (^1.28.0) - Backend-as-a-Service

### UI & Styling
- **[NativeWind](https://www.nativewind.dev/)** (^4.2.1) - Tailwind CSS for React Native
- **[Expo Router](https://docs.expo.dev/router/introduction/)** (~6.0.13) - File-based routing
- **[React Navigation](https://reactnavigation.org/)** - Navigation library

### Development Tools
- ESLint - Code linting
- Prettier - Code formatting
- React Compiler - Performance optimization

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (optional, but recommended)
- iOS Simulator (for macOS) or Android Studio (for Android development)
- [Convex](https://www.convex.dev/) account (for backend services)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd simple-todo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Convex

1. Create a [Convex account](https://www.convex.dev/) if you haven't already
2. Set up your Convex project and configure your deployment URL
3. Update your Convex configuration in the project

### 4. Start the Development Server

```bash
npm start
```

This will start the Expo development server. You'll see a QR code and options to:

- Press `a` to open on **Android** emulator
- Press `i` to open on **iOS** simulator
- Press `w` to open in **web** browser
- Scan the QR code with **Expo Go** app on your device

## 📱 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start the Expo development server |
| `npm run android` | Run on Android emulator/device |
| `npm run ios` | Run on iOS simulator/device |
| `npm run web` | Run in web browser |
| `npm run lint` | Run ESLint to check code quality |
| `npm run prebuild` | Generate native projects (iOS/Android) |

## 📁 Project Structure

```
simple-todo/
├── src/
│   ├── app/                 # Expo Router pages (file-based routing)
│   │   ├── (tabs)/         # Tab navigation screens
│   │   └── _layout.tsx     # Root layout
│   ├── screens/            # Screen components
│   │   ├── home/           # Home screen with todo list
│   │   │   ├── home.tsx
│   │   │   └── home.styles.ts
│   │   └── settings/       # Settings screen
│   │       ├── settings.tsx
│   │       └── settings.styles.ts
│   ├── components/         # Reusable components
│   ├── hooks/              # Custom React hooks
│   │   └── useTheme.tsx    # Theme management hook
│   ├── providers/          # Context providers
│   ├── contexts/           # React contexts
│   │   └── themeContext.ts # Theme context
│   ├── types/              # TypeScript type definitions
│   ├── constants/          # App constants
│   └── ...
├── convex/                 # Convex backend
│   ├── schema.ts          # Database schema
│   └── todos.ts           # Todo mutations & queries
├── assets/                 # Images, fonts, etc.
└── ...
```

## 🎨 Theming

The app includes a comprehensive theming system with:

- **Automatic Theme Detection**: Follows system preferences
- **Manual Toggle**: Switch between light and dark modes
- **Custom Color Scheme**: Defined in `src/types/colorScheme.types.ts`
- **Context-Based**: Theme state managed via React Context

## 🔧 Configuration

### Expo Configuration

The app configuration is located in `app.json`. Key settings include:

- App name and version
- Platform-specific configurations (iOS, Android, Web)
- Splash screen settings
- Icon configurations

### TypeScript Path Aliases

The project uses TypeScript path aliases for cleaner imports:

```typescript
@/*          → ./src/*
@screens/*   → ./src/screens/*
@hooks/*     → ./src/hooks/*
@components/* → ./src/components/*
@types/*     → ./src/types/*
```

## 🗄️ Database Schema

The Convex schema defines a simple todo structure:

```typescript
{
  todos: {
    text: string,
    isCompleted: boolean
  }
}
```

Available operations:
- `getTodos` - Query all todos
- `addTodo` - Create a new todo
- `toggleTodo` - Mark todo as complete/incomplete
- `updateTodo` - Update todo text
- `deleteTodo` - Remove a todo
- `clearAllTodos` - Delete all todos

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private.

## 🔗 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Convex Documentation](https://docs.convex.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Backend powered by [Convex](https://www.convex.dev/)
- Styling with [NativeWind](https://www.nativewind.dev/)

---

**Made with ❤️ using Expo and React Native**
