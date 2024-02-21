import {Label} from "@/components/ui/label";
import React, {ReactNode} from "react";
import Toggle from "@/components/theme/toggle";

interface SidebarItemProps {
    icon: ReactNode
    label: string
    type?: "menu" | "switch"
}

export default function SidebarItem({icon, label, type = "menu"}: SidebarItemProps) {
    return (
        <>
            {type === "menu" ? (
                <div className="flex w-full cursor-pointer space-x-1 items-center p-3 rounded-xl hover:bg-muted transition-all">
                    {icon}
                    <Label>{label}</Label>
                </div>
            ) : (
                <div className="flex cursor-pointer w-full justify-between px-3 py-2 rounded-xl hover:bg-muted transition-all">
                    <div className="flex items-center">
                        {icon}
                        <Label htmlFor="darkmode">{label}</Label>
                    </div>
                    <Toggle />
                </div>
            )}
        </>
    )
}
