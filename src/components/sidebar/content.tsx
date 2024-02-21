import {SheetHeader} from "@/components/ui/sheet";
import ProfileInfo from "@/components/sidebar/profile-info";
import {Separator} from "@/components/ui/separator";
import {sidebarItems} from "@/data/data";
import SidebarItem from "@/components/sidebar/sidebar-item";

export default function Content() {
    return (
        <>
            <SheetHeader>
                <ProfileInfo />
                <Separator/>
            </SheetHeader>
            <div className="flex flex-col space-y-1 ">
                {sidebarItems.map((sidebarItem, index) => (
                    <SidebarItem key={index} icon={sidebarItem.icon} label={sidebarItem.label} type={sidebarItem.type}/>
                ))}
            </div>
        </>
    )
}
