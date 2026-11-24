import { Show, SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

export default function Page() {
    return (
        <>
            <Suspense>
                <Show when="signed-out">
                    <SignIn />
                </Show>
            </Suspense>
        </>        
    )
}