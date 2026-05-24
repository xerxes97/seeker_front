import Sidebar from "@/components/common/sidebar";
import TopAppBar from "@/components/common/top-app-bar";
import ProfileProvider from "@/components/profile/profile-provider";

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ProfileProvider>
      <Sidebar />
      <TopAppBar />
      <div className="ml-64 mt-16">
        {children}
      </div>
    </ProfileProvider>
  );
}
