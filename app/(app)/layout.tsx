import Sidebar from "@/components/common/sidebar";
import TopAppBar from "@/components/common/top-app-bar";

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Sidebar />
      <TopAppBar />
      <div className="ml-64 mt-16">
        {children}
      </div>
    </>
  );
}
