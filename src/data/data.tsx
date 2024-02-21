import {Bookmark, LogOut, Palette, Settings, Tv2, Users} from "lucide-react";
import React, {ReactNode} from "react";

type Status = "Online" | "Offline"

export interface Chat {
    id: number;
    fullName: string;
    email: string;
    messageCount: number;
    status: Status
}

export const chats: Chat[] = [
    {
        id: 1,
        fullName: 'Abduxalil',
        email: 'uicodee@gmail.com',
        messageCount: 10,
        status: "Online"
    },
    {
        id: 2,
        fullName: 'Aziz',
        email: 'azikgayforever@gmail.com',
        messageCount: 10,
        status: "Offline"
    },
    {
        id: 3,
        fullName: 'Nargizaxon',
        email: 'nargizaxon@gmail.com',
        messageCount: 10,
        status: "Online"
    },
]

export const sidebarItems: {label: string, icon: ReactNode, type?: "menu" | "switch"}[] = [
    {
        label: "Темная тема",
        icon: <Palette className="text-primary mr-2 h-4 w-4"/>,
        type: "switch"
    },
    {
        label: "Настройки",
        icon: <Settings className="text-primary mr-2 h-4 w-4"/>
    },
    {
        label: "Создать группу",
        icon: <Users className="text-primary mr-2 h-4 w-4" />
    },
    {
        label: "Создать канал",
        icon: <Tv2 className="text-primary mr-2 h-4 w-4"/>
    },
    {
        label: "Избранное",
        icon: <Bookmark className="text-primary mr-2 h-4 w-4"/>
    },
    {
        label: "Выйти",
        icon: <LogOut className="text-primary mr-2 h-4 w-4"/>
    },
]