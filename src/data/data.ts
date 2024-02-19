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