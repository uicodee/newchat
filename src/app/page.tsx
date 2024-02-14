import {Button} from "@/components/ui/button";
import {Bookmark, ChevronLeft, Menu, Moon, Palette, Phone, Settings, Users} from "lucide-react";
import {Input} from "@/components/ui/input";
import {chats} from "@/data/data";
import Link from "next/link";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";

export default function Home() {
    return (
        <div className="flex h-dvh">
            <div className='flex w-full md:w-4/12 lg:w-3/12 xl:w-2/12 border-r p-3'>
                <div className="space-y-1 w-full">
                    <div className="flex mb-4 w-full gap-x-2">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost">
                                    <Menu className="h-4 w-4"/>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="flex flex-col w-full md:w-4/12 lg:w-3/12 xl:w-2/12">
                                <SheetHeader>
                                    <div className="flex flex-col space-y-4 bg-muted p-3 rounded-xl">
                                        <Avatar className="h-14 w-14">
                                            <AvatarImage src="/01.png" alt="Avatar"/>
                                        </Avatar>
                                        <div className="flex flex-col justify-start space-y-1">
                                            <p className="flex font-semibold leading-none">Abduxalilov Abduxalil</p>
                                            <p className="flex text-sm text-muted-foreground">email@email.com</p>
                                        </div>
                                    </div>
                                    <Separator/>
                                </SheetHeader>
                                <div className="flex flex-col space-y-2 ">
                                    <div className="flex w-full space-x-1 items-center p-3 rounded-xl hover:bg-muted transition-all">
                                        <Users className="flex mr-2 h-5 w-5"/>
                                        <Label className="flex text-base">Create group</Label>
                                    </div>
                                    <div className="flex w-full space-x-1 items-center p-3 rounded-xl hover:bg-muted transition-all">
                                        <Bookmark className="flex mr-2 h-5 w-5"/>
                                        <Label className="flex text-base">Saved Messages</Label>
                                    </div>
                                    <div className="flex w-full space-x-1 items-center p-3 rounded-xl hover:bg-muted transition-all">
                                        <Settings className="mr-2 h-5 w-5"/>
                                        <Label className="text-base">Settings</Label>
                                    </div>
                                    <div className="flex w-full justify-between p-3 rounded-xl hover:bg-muted transition-all">
                                        <div className="flex items-center space-x-1">
                                            <Palette className="mr-2 h-5 w-5" />
                                            <Label className="text-base" htmlFor="darkmode">Dark mode</Label>
                                        </div>
                                        <Switch id="darkmode"/>
                                    </div>
                                </div>
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
                                        className="flex justify-center items-center text-center rounded-full bg-primary w-6 h-6 text-xs text-white">{chat.messageCount}</div>
                                </div>
                            </Link>
                            <Separator/>
                        </>
                    ))}
                </div>
            </div>
            <div className="hidden md:flex md:w-8/12 lg:w-9/12 xl:w-10/12 flex-col">
                <main className="flex w-full h-full p-3 text-center items-center justify-center">
                    <div className="flex px-12 py-4 bg-muted text-gray-500 rounded-xl">
                        Select chat and start chating
                    </div>
                </main>
            </div>
        </div>

    )
}
