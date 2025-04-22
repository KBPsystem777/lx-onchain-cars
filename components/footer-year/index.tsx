import { useCurrentYear } from "@/hooks/use-current-year";

export const FooterYear = () => {
  const year = useCurrentYear();
  return (
    <p className="text-xs text-muted-foreground">
      {`© ${year} LXCars. All rights reserved.`}
    </p>
  );
};
