import { Show, SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function Page() {
    return (
        <>
            <Suspense>
                <Show when="signed-out">
                    <SignUp />
                </Show>
            </Suspense>
        </>        
    )
}