"use client";

import { Show, UserButton } from "@clerk/nextjs";
import { Suspense } from "react";

export const NavbarRoutes = () => {
    return (
        <div className="flex gap-x-2 ml-auto">
        <Suspense>
            <Show when={"signed-in"}>
                <UserButton 
                    afterSwitchSessionUrl="/"
                />
            </Show>
      </Suspense>
        </div>
    );
}