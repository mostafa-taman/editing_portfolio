"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import HoverLink from "@/components/common/HoverLink";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logos/logo-transparent.png";
import ThemeTogglerButton from "./ThemeToggle";
import { cn } from "@/lib/utils";
import createNavRoutes from "./navbarRoutes";
import { icons } from "@/constants";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const NavBar: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
    const { t, i18n } = useTranslation();
    const pathname = usePathname();

    const isArabic = i18n.language === "ar";
    const routes = createNavRoutes(pathname);

    return (
        <div className=" px-4 mx-auto max-w-7xl sm:px-6 pb-3">
            <div className="relative pt-6">
                <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                    <div className={`flex items-center md:absolute md:inset-y-0 ${isArabic ? "md:right-0" : "md:left-0"}`}>
                        <Link href={"/"}>
                            <Image
                                alt="mostafa taman logo"
                                src={Logo}
                                width={50}
                                height={50}
                            />
                        </Link>
                    </div>



                    <div className="flex flex-row gap-8">
                        {routes && routes.map((route) => (
                            <HoverLink key={route.href}>
                                <Link
                                    href={route.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary",
                                        route.active ? "text-primary" : "text-muted-foreground"
                                    )}
                                >

                                    {t(`nav.${route.label.toLowerCase()}`)}
                                </Link>
                            </HoverLink>
                        ))}
                    </div>


                    <div className={`gap-5 md:absolute md:flex md:items-center md:justify-end md:inset-y-0 ${isArabic ? "md:left-0" : "md:right-0"}`}>
                        <div className="hidden md:flex md:flex-row gap-2">
                            <Button className="rounded-full cursor-pointer" variant="outline" size={"icon"}>
                                <icons.DownloadIcon />
                            </Button>

                            <ThemeTogglerButton />
                        </div>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="flex md:hidden justify-between rounded-full cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <icons.MenuButtonIcon className="h-4 w-4" />
                                    </div>
                                </Button>
                            </DropdownMenuTrigger>


                            <DropdownMenuContent align="center" className="grid grid-cols-1 px-1 items-center justify-center gap-1 rounded-lg mt-2">
                                <Button className="rounded-full cursor-pointer" variant="outline" size={"default"}>
                                    <icons.DownloadIcon />
                                </Button>

                                <ThemeTogglerButton size="default" />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;