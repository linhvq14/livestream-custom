// import { ModeToggle } from "@/components/theme-toggle";
// import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b  bg-background px-4 ">
      <div className="mx-auto flex h-12 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Icons.flask className="h-4 w-4 text-violet-500 dark:text-violet-400" />
            <span className="text-violet-500 font-bold dark:text-violet-400">
              Cast
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
