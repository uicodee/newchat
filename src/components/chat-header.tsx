import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ChevronLeft, Phone, User} from "lucide-react";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Chat} from "@/data/data";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Separator} from "@/components/ui/separator";

interface ChatHeaderProps {
    currentChat: Chat | undefined
}

export default function ChatHeader({currentChat}: ChatHeaderProps) {
    return (

        <Dialog>
            <DialogTrigger asChild>
                <header className="py-3 px-4 border-b h-fit w-full cursor-pointer">
                    <div className="flex justify-between ">
                        <div className="flex w-full gap-x-1">
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
                            <Button variant="ghost" onClick={(event) => event.preventDefault()}>
                                <Phone className="h-5 w-5"/>
                            </Button>
                        </div>
                    </div>
                </header>
            </DialogTrigger>
            <DialogContent className="rounded-xl max-w-[450px] sm:w-2/3">
                <DialogHeader>
                    <DialogTitle className="flex justify-start">Information</DialogTitle>
                    <DialogDescription>
                        <div className="flex flex-col">
                            <div className="flex gap-x-4 items-center mb-6">
                                <Avatar className="flex mt-4 w-[80px] h-[80px]">
                                    <AvatarImage src="/01.png"/>
                                </Avatar>
                                <div className="flex flex-col h-full ">
                                    <div className="flex text-lg font-bold">
                                        Abduxalilov
                                    </div>
                                    <div className="flex">
                                        last seen recently
                                    </div>
                                </div>
                            </div>
                            <div className="flex p-3 rounded-xl bg-muted flex-col space-y-3">
                                <div className="flex space-x-4 items-center">
                                    <div className="flex">
                                        <Phone className="h-5 w-5"/>
                                    </div>
                                    <div className="flex text-base">
                                        +998903641722
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex space-x-4 items-center">
                                    <div className="flex">
                                        <User className="h-5 w-5"/>
                                    </div>
                                    <div className="flex text-base">
                                        @uicode
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}
