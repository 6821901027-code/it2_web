import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function DashboardPage() {
  const user = await getSession();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome: {user.name as string}</p>
      <p>Role: {user.role as string}</p>
    </div>
  );
}