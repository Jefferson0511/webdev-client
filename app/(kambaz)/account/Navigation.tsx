"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";
import "../kambaz.css";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  // Signed in: only Profile. Signed out: only Signin and Signup.
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {links.map((link) => {
        const href = `/account/${link}`;
        return (
          <Link
            key={link}
            href={href}
            className={
              pathname === href
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {link === "signin" ? "Signin" : link === "signup" ? "Signup" : "Profile"}
          </Link>
        );
      })}
    </div>
  );
}
