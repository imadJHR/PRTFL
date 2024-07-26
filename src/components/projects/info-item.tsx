import { LucideIcon } from "lucide-react";
import { FC } from "react";

interface InfoItemProps {
  label: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const InfoItem: FC<InfoItemProps> = ({ label, icon: Icon, children }) => {
  return (
    <div className="grid grid-cols-3 items-start gap-2 text-sm ">
      <div className="flex items-center gap-2 ">
        <Icon className="size-5" />
        <span >{label}:</span>
      </div>
      <div className="col-span-2 text-foreground">
        {children}

      </div>
    </div>
  );
};

export default InfoItem;
