import {FC} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const Page: FC = () => {
    return (
        <div className="h-lvh flex justify-center items-center">
            <Card className="max-w-72 md:max-w-md w-full">
                <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">Kirish</CardTitle>
                    <CardDescription>Akkauntingizga kiring</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="example@mail.com" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Parol</Label>
                                <Input type="password" id="password" placeholder="Password" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <Button className="w-full">Kirish</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
export default Page
