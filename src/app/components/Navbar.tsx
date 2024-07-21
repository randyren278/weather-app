"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { github } from "../utils/icons";

function Navbar() {
  const router = useRouter();

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left">Navbar</div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <Button
          className="source-code flex items-center gap-2"
          onClick={() => {
            router.push("https://github.com/randyren278/weather-app.git");
          }}
        >
          {github} Source Code
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
