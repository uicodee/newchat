"use client"

import Sidebar from "@/components/sidebar";
import SelectChat from "@/components/select-chat";

export default function Home() {
    return (
        <div className="flex h-dvh">
            <div className="flex w-full md:w-4/12 lg:w-3/12 xl:w-2/12 border-r p-3">
                <Sidebar />
            </div>
            <SelectChat />
        </div>

    )
}
