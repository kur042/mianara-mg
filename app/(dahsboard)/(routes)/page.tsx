import { Show, UserButton } from "@clerk/nextjs";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense>
        <Show when={"signed-in"}>
          <UserButton 
            afterSwitchSessionUrl="/"
          />
        </Show>
      </Suspense>
        
        <p>protected area</p>
    </div>
  );
}
