import { AppHeader } from "../components/appHeader";
import { AppFooter } from "../components/appFooter";
import { WelcomePage } from "../components/WelcomePage";

export function HomePage() {
  return (
    <>
      <AppHeader></AppHeader>
      <WelcomePage></WelcomePage>
      <AppFooter></AppFooter>
    </>
  );
}
