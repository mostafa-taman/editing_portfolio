"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { themes } from "@/constants";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

interface ThemeTogglerButtonProps {
    className?: string;
    size?: "default" | "sm" | "lg" | "icon";
    variant?: "default" | "outline" | "link" | "destructive" | "secondary" | "ghost" | "heroGradient";
}

const ThemeTogglerButton: React.FC<ThemeTogglerButtonProps> = ({ size, variant }) => {
    const { t } = useTranslation();
    const { setTheme, theme } = useTheme();

    const currentTheme = themes.find(t => t.value === theme) || themes[0];
    const CurrentIcon = currentTheme.icon;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="rounded-full" size={size ? size : "icon"} variant={variant ? variant : "outline"}>
                    <CurrentIcon />
                </Button>
            </DropdownMenuTrigger>


            <DropdownMenuContent align="center" className="grid grid-cols-1 px-2 items-center justify-center gap-2 border-none mt-2">
                {themes.map(({ value, label, icon: Icon }) => (
                    <Button
                        key={value}
                        variant="outline"
                        onClick={() => setTheme(value)}
                        className={`w-full bg-transparent justify-start ${theme === value ? "bg-muted" : ""}`}
                    >
                        <Icon className=" h-4 w-4" />
                        {label}
                    </Button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ThemeTogglerButton;
