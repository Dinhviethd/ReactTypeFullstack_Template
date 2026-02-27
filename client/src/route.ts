
import { lazy } from 'react'
import {App} from "./App";
import { ProtectedRoute } from '@/features/auth/components/ProtectedRoute'

const AuthLayout = lazy(() => import('@/features/auth/layouts/AuthLayout'))
const MainLayout = lazy(() => import('@/components/shared/MainLayout'))

const Login = lazy(() => import('@/features/auth/components/LoginPage'))
const SignupForm = lazy(() => import('@/features/auth/components/Register').then(m => ({ default: m.SignupForm })))
const ResetPassword = lazy(() => import('@/features/auth/components/ResetPassword'))


const routes = [
  {
    path: "/",
    Component: App,
    children: [
      {
        Component: ProtectedRoute, 
        children: [
          {
            Component: MainLayout,
            children: [
            ],
          },
        ],
      },
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          { path: "login", Component: Login },
          { path: "register", Component: SignupForm },
          { path: "reset-password", Component: ResetPassword },
        ],
      },
    ],
  },
];

export default routes;