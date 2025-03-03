import { userData } from "../types";

export default function User (results : userData) {
    return (
        <div>
            <img src={results.results[0].picture.medium}></img>
            <p>{results.results[0].name.first} {results.results[0].name.last}</p>
            <p>{results.results[0].email}</p>
        </div>
    )
}