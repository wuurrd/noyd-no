import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { currentTheme as theme, MAX_WIDTH } from "~/utils/theme";
import clsx from "clsx";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

export const HomeLayout = ({ title, header, children }: { title: string; header?: ReactNode; children: ReactNode }) => {
  return (
    <div
      className="m-auto flex h-screen flex-col items-center overflow-auto px-4 md:px-8"
      style={theme.backgroundStyles}
    >
      <div className="flex w-full flex-col items-center justify-end">
        <div
          className={clsx("flex w-full flex-row justify-between border-b py-8 border-black items-center", MAX_WIDTH)}
        >
          <Link to={"/"} className="phudu text-4xl flex flex-row items-end gap-2">
            <div className="hidden md:flex">{title}</div>
          </Link>
          {header}
        </div>
      </div>

      {children}

      <div className={clsx("flex w-full flex-row border-t border-black", MAX_WIDTH)}>
        <div
          className={clsx(
            "flex flex-row justify-center text-sm gap-[1rem] p-4 items-center w-full",
            theme.footerStyles
          )}
        >
          <a href="https://noyd.no/" target="noyd.no">
            👍 Nøyd, en tjeneste fra Accessful AS - noyd.no
          </a>
        </div>
      </div>
    </div>
  );
};

export const HomeContent = ({ children }: { children: ReactNode }) => {
  return <div className={clsx("flex h-full mb-16 w-full flex-col-reverse md:flex-row", MAX_WIDTH)}>{children}</div>;
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <HomeLayout title="nøyd.no">
          <HomeContent>{children}</HomeContent>
        </HomeLayout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
