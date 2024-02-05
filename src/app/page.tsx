import Image from "next/image";

async function getData() {
    const res = await fetch("https://lcoalhost:3000/api/product");
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Home() {
    const data = await getData();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    );
}
