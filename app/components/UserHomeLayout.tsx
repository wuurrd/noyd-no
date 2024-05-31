import { Link } from "@remix-run/react";
import clsx from "clsx";
import { ReactNode } from "react";
import { House } from "@phosphor-icons/react/dist/csr/House";
import { MAX_WIDTH } from "~/utils/theme";

const theme = {
  backgroundStyles: {
    background:
      "linear-gradient(288deg, #E5DDC5 0%, #E5DDC5 35%, #F1EEDC calc(35% + 1px), #F1EEDC 45%, #BED7DC calc(45% + 1px), #BED7DC 65%, #B3C8CF calc(65% + 1px), #B3C8CF 100%)",
  },
  contentBackground: "bg-[#ffffffdd]",
};

export const UserHomeLayout = ({
  title,
  header,
  children,
  homeLink,
}: {
  title: string;
  header?: ReactNode;
  children: ReactNode;
  homeLink: string;
}) => {
  return (
    <div
      className="m-auto flex h-screen flex-col items-center overflow-auto px-4 md:px-8"
      style={theme.backgroundStyles}
    >
      <div className={clsx("flex w-full flex-col items-center justify-end", MAX_WIDTH)}>
        <div className={clsx("flex w-full flex-row justify-between border-b py-8 border-black items-center")}>
          <Link to={homeLink} className="phudu text-4xl flex flex-row items-end gap-2">
            <House weight="duotone" />
            <div className="hidden md:flex">{title}</div>
          </Link>
          {header}
        </div>
      </div>
      <div className={clsx("flex w-full flex-col items-center justify-center", MAX_WIDTH)}>{children}</div>

      <div className={clsx("flex w-full flex-row border-t border-black", MAX_WIDTH)}>
        <div className={clsx("flex flex-row justify-center text-sm gap-[1rem] p-4 items-center w-full")}>
          <a href="/">Nøyd 👍 - En tjeneste fra Accessful AS - Org nr932 366 770</a>
        </div>
      </div>
    </div>
  );
};
