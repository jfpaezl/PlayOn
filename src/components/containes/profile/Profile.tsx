import { ProfileCss } from "./Profile.style";
import CollageSection from "./subProfile/CollageSection";
import HeroProfile from "./subProfile/HeroProfile";

export default function Profile() {
  return (
    <ProfileCss>
      <HeroProfile />
      <CollageSection />
    </ProfileCss>
  );
}