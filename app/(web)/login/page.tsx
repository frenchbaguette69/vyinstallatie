import { Suspense } from "react"
import LoginForm from "./login-form"

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-96 py-32 flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-xl shadow p-8">
            <div className="text-center">Loading...</div>
          </div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  )
}
