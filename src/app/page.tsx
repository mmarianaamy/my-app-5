'use client'

import { useFetchData } from "./hooks/fetchUser";

import { apicall } from "./types";
import User from "./components/user";

export default function Home() {
  const user : apicall = useFetchData("https://randomuser.me/api/")
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          { user.data.results && 
            <User results={user.data.results}/>
          }
        </div>
      </main>
    </div>
  );
}
