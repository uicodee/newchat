"use client"

import {FC, useState} from "react";
import {Button} from "@/components/ui/button";
import {ChevronLeft, Menu, Phone} from "lucide-react";
import {Input} from "@/components/ui/input";
import {chats} from "@/data/data";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";
import {useParams} from "next/navigation";
import Link from "next/link";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Label} from "@/components/ui/label";

const Page: FC = () => {
    const [message, setMessage] = useState<string>("");
    const onSendButtonClick = () => {
        console.log(message)
    }
    const params = useParams<{ id: string }>()
    const currentChat = chats.find(chat => chat.id === Number(params.id));
    return (
        <div className="flex h-dvh">
            <div className='hidden md:flex md:w-4/12 lg:w-3/12 xl:w-2/12 border-r h-dvh p-3'>
                <div className="space-y-1 w-full">
                    <div className="flex mb-4 w-full gap-x-2">
                        <Input className="w-5/6" placeholder="Поиск"/>
                    </div>
                    {chats.map((chat, index) => (
                        <>
                            <Link href={`/chat/${chat.id}`}>
                                <div key={index}
                                     className="flex items-center justify-between p-4 hover:bg-muted transition-all rounded-lg cursor-pointer">
                                    <div className="flex">
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage src="/01.png" alt="Avatar"/>
                                        </Avatar>
                                        <div className="ml-4 space-y-1">
                                            <p className="text-sm font-medium leading-none">{chat.fullName}</p>
                                            <p className="text-sm text-muted-foreground">Hi!</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-center items-center text-center rounded-full bg-primary w-6 h-6 text-xs text-white">{chat.messageCount}</div>
                                </div>
                            </Link>
                            <Separator/>
                        </>
                    ))}
                </div>
            </div>
            <div className="flex w-full md:w-8/12 lg:w-9/12 xl:w-10/12 flex-col">
                <header className="py-3 px-4 border-b h-fit w-full">
                    <div className="flex justify-between">
                        <div className="flex gap-x-1">
                            <Link href="/">
                                <Button className="flex md:hidden" variant="ghost">
                                    <ChevronLeft className="h-5 w-5"/>
                                </Button>
                            </Link>
                            <Avatar className="h-9 w-9">
                                <AvatarImage src="/01.png" alt="Avatar"/>
                            </Avatar>
                            <div className="ml-4 space-y-1">
                                <p className="text-sm font-medium leading-none">{currentChat?.fullName}</p>
                                <p className={`text-sm ${currentChat?.status === "Online" ? "text-green-400" : "text-muted-foreground"}`}>{currentChat?.status}</p>
                            </div>
                        </div>
                        <div className="flex gap-x-2">
                            <Button variant="ghost">
                                <Phone className="h-5 w-5"/>
                            </Button>
                        </div>
                    </div>
                </header>
                <main className="flex h-full p-3 text-center">
                    <div className="flex items-end w-full gap-x-2">
                        <Input
                            value={message}
                            className="w-full"
                            placeholder="Enter message"
                            onKeyDown={(event) => {
                                if (event.key === "Enter") onSendButtonClick()
                            }}
                            onChange={(event) => setMessage(event.target.value)}
                        />
                    </div>
                </main>
            </div>
        </div>

    )
}
export default Page
