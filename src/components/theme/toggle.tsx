"use client"

import {Switch} from "@/components/ui/switch";
import {useTheme} from "next-themes";

export default function Toggle() {
    const {theme, setTheme} = useTheme()
    return (
        <Switch checked={theme === "dark"} id="darkmode" onCheckedChange={() => theme === "light" ? setTheme('dark') : setTheme('light')}/>
    )
}
