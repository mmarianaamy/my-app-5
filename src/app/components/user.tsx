import { Person } from "@mui/icons-material";
import { resultsData } from "../types";

interface userProps{
    results: resultsData;
}

export default function User (u : userProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-2">
            { u.results.picture && 
                // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                <img className="rounded-full w-40" src={u.results.picture.medium}></img>
            }
            <p className="text-2xl">Hi! I&apos;m</p>
            <p className="text-5xl">{u.results.name.first} {u.results.name.last}</p>
            <Person />
        </div>
    )
}