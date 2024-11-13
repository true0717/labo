import { Separator } from "@/components/ui/separator";

interface CustomSeparatorProps {
  className?: string;
}

const CustomSeparator: React.FC<CustomSeparatorProps> = ({
  className = "",
}) => {
  return <Separator className={`my-8 ${className}`} />;
};

export default CustomSeparator;
