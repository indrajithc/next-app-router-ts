
export const metadata = {
  title: "Dashboard",
  description: "My dashboard description"
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      dashboard layout
      {children}
    </div>
  );
}
