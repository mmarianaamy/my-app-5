'use client'

import { useFetchData } from "./hooks/fetchUser";

import User from "./components/user";


export default function Home() {

  const {data, refetch} = useFetchData("https://randomuser.me/api/")


  return (
    <div className="flex">
      <div className="bg-gray-700 min-h-screen w-1/5 p-3 flex flex-col gap-2">

        {data && data.userHistory.map((u) => 
        <button key={u.name.first}>
        <div className="border border-white flex justify-center items-center h-10 rounded-md size-2xl">
          <p>{u.name.first} {u.name.last}</p>
        </div>
        </button>)}
        

        <button className="p-3 bg-gray-900 rounded-md" onClick={refetch}>
          + New User
        </button>

      </div>
      <div className="w-4/5 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="bg-gray-900 p-3 rounded-md">
            { data && data.userHistory.length > 0 && 
              <User results={data.userHistory[0]}/>
            }
          </div>
        </main>
      </div>
    </div>
  );
}
