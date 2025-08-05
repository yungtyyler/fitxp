import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Thank you for signing up!</CardTitle>
              {/* <CardDescription>Check your email to confirm</CardDescription> */}
            </CardHeader>
            <CardContent>
              {/* TODO: Handle email confirmation later
              <p className="text-sm text-muted-foreground">
                You&apos;ve successfully signed up. Please check your email to
                confirm your account before signing in.
              </p> */}
              <p className="text-sm text-muted-foreground mb-2">You&apos;ve successfully signed up! Return to login.</p>
              <Link href="/auth/login" className="w-full text-black bg-white rounded p-1">
                Return to Login
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
