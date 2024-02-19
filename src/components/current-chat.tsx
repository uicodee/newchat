"use client"

import React, {useState} from 'react'
import {Input} from "@/components/ui/input";

export default function CurrentChat() {
    const [message, setMessage] = useState("");
    return (
        <main className="flex h-full p-3 text-center">
            <div className="flex items-end w-full gap-x-2">
                <Input
                    value={message}
                    className="w-full"
                    placeholder="Enter message"
                    // onKeyDown={(event) => {
                    //     if (event.key === "Enter") onSendButtonClick()
                    // }}
                    onChange={(event) => setMessage(event.target.value)}
                />
            </div>
        </main>
    )
}
