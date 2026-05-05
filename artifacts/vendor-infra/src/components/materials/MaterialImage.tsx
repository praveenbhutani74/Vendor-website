import { useEffect, useState, type ImgHTMLAttributes } from "react";
import { Package } from "lucide-react";
import { cn } from "@/lib/utils";

type MaterialImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  src: string;
  alt: string;
  label?: string;
};

export function MaterialImage({ src, alt, label, className, ...props }: MaterialImageProps) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-[linear-gradient(135deg,#eef4ff_0%,#ffffff_48%,#fff4d0_100%)] text-[#00244F]",
          className,
        )}
      >
        <div className="flex flex-col items-center gap-2 px-3 text-center">
          <Package className="h-8 w-8 text-[#FF7F00]" />
          <span className="text-xs font-bold leading-tight">{label ?? alt}</span>
        </div>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} {...props} />;
}
