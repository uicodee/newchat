import {Avatar, AvatarImage} from "@/components/ui/avatar";
import React from "react";

export default function ProfileInfo() {
    return (
        <div className="flex flex-col space-y-4 p-3">
            <Avatar className="h-14 w-14">
                <AvatarImage src="/01.png" alt="Avatar"/>
            </Avatar>
            <div className="flex flex-col justify-start space-y-1">
                <p className="flex font-semibold leading-none">Abduxalilov Abduxalil</p>
                <p className="flex text-sm text-muted-foreground">email@email.com</p>
            </div>
        </div>
    )
}
