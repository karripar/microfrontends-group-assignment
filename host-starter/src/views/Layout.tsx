import TopBar from "@/components/TopBar";
import { useEffect } from "react";
import { useUserContext } from "mediastore/contextHooks";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { user, handleAutoLogin } = useUserContext();

  useEffect(() => {
    if (!user) {
      handleAutoLogin();
    }
  }, [user, handleAutoLogin]);

  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
