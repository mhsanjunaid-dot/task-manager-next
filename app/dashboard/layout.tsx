"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    
    const token = localStorage.getItem("accessToken");

    if (!token) {
      
      router.replace("/login");
      return;
    }

    
    setAuthorized(true);
  }, [router]);

  
  if (!authorized) return null;

  
  return <>{children}</>;
}
