import WindowSizeDemo from "./WindowSizeDemo";
import ToggleDemo from "./ToggleDemo";
import LocalStorageDemo from "./LocalStorageDemo";
import IndependentToggles from "./IndependentToggles";
import HookProfileForm from "./HookProfileForm";
import "../../lab2/tailwind/utilities.css";
export default function HooksPage() {
  return (
    <div id="wd-lab4-hooks" className="flex flex-col gap-8 p-4">
      <h2>Writing Your Own Hooks</h2>
      <WindowSizeDemo />
      <ToggleDemo />
      <LocalStorageDemo />
      <IndependentToggles />
      <HookProfileForm />
    </div>
  );
}
