"use client"

import {FC} from "react";
import {chats} from "@/data/data";
import {useParams} from "next/navigation";
import Sidebar from "@/components/sidebar";
import ChatHeader from "@/components/chat-header";
import CurrentChat from "@/components/current-chat";

const Page: FC = () => {
    const params = useParams<{ id: string }>()
    const currentChat = chats.find(chat => chat.id === Number(params.id));
    return (
        <div className="flex h-dvh w-dvw">
            <div className="hidden md:flex md:w-4/12 lg:w-3/12 xl:w-2/12 border-r p-3">
                <Sidebar />
            </div>
            <div className="flex w-full md:w-8/12 lg:w-9/12 xl:w-10/12 flex-col">
                <ChatHeader currentChat={currentChat} />
                <CurrentChat />
            </div>
        </div>

    )
}
export default Page
