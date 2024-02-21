import {FC} from "react";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

const Page: FC = () => {
    return (
        <div className="h-lvh flex justify-center items-center">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Войти</TabsTrigger>
                    <TabsTrigger value="password">Зарегистрироваться</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card className="max-w-80 md:max-w-md w-full">
                        <CardHeader>
                            <CardTitle className="text-xl md:text-2xl">Войти</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="example@mail.com" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="password">Пароль</Label>
                                        <Input type="password" id="password" placeholder="******" />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex flex-col">
                            <Button className="w-full">Войти</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card className="max-w-80 md:max-w-md w-full">
                        <CardHeader>
                            <CardTitle className="text-xl md:text-2xl">Регистрация</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="email">Полное имя</Label>
                                        <Input id="email" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="example@mail.com" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="password">Пароль</Label>
                                        <Input type="password" id="password" placeholder="******" />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex flex-col">
                            <Button className="w-full">Регистрация</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>

        </div>
    )
}
// internationalization => i18n
// localization => l10n
export default Page
