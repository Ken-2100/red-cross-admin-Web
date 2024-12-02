"use client";
import Providers from "@/components/Providers";
import SideNavigationProviderComponent from "@/components/SideNavigationProvider";
import SearchArrayProvider from "@/components/SearchArrayProvider";
import Sidebar from "@/components/Sidebar";
import SearchInputField from "@/components/SearchInputField";
import ProfileDropDown from "@/components/ProfileDropdown";
import { Toaster } from "@/components/ui/toaster";

export default function ClientProviders({ children }) {
  return (
    <Providers>
      <SideNavigationProviderComponent>
        <SearchArrayProvider>
          <div className="flex justify-between items-center w-full">
            <Sidebar />

            <div className="flex flex-col w-full h-screen">
              <div className="w-full h-16 flex items-center shadow-card justify-between px-4">
                <SearchInputField />
                <ProfileDropDown />
              </div>
              {children}
            </div>
          </div>

          <Toaster />
        </SearchArrayProvider>
      </SideNavigationProviderComponent>
    </Providers>
  );
}
