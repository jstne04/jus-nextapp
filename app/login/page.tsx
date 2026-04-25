"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    alert("Logged in successfully!");
  };

  return (
    <main className="min-h-screen bg-[#f5f5f0] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
          <div className="mb-8">
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Welcome back</p>
            <h1 className="text-3xl font-serif text-gray-900">Sign In</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs uppercase tracking-widest text-gray-400">
                  Password
                </label>
                <span className="text-xs text-gray-400 hover:text-black cursor-pointer">Forgot?</span>
              </div>
              <input
                {...register("password")}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-6">
            No account?{" "}
            <Link href="/signup" className="text-black font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          <Link href="/" className="hover:underline">← Back to Home</Link>
        </p>
      </div>
    </main>
  );
}