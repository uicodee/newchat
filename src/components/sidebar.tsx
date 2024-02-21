import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";
import {Input} from "@/components/ui/input";
import {chats} from "@/data/data";
import Link from "next/link";
import Content from "@/components/sidebar/content";


export default function Sidebar() {
    return (
        <div className="space-y-1 w-full">
            <div className="flex mb-4 w-full gap-x-2">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost">
                            <Menu className="h-4 w-4"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col w-full md:w-4/12 lg:w-3/12 xl:w-2/12">
                        <Content />
                    </SheetContent>
                </Sheet>
                <Input className="w-5/6" placeholder="Поиск"/>
            </div>
            {chats.map((chat, index) => (
                <>
                    <Link key={index} href={`/chat/${chat.id}`}>
                        <div
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
                                className="flex justify-center items-center text-center rounded-full bg-primary w-6 h-6 text-xs dark:text-black text-white">{chat.messageCount}</div>
                        </div>
                    </Link>
                    <Separator/>
                </>
            ))}
        </div>
    )
}
