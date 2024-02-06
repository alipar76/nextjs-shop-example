import Image from "next/image";

async function getData() {
    const res = await fetch("http://localhost:3000/api/product");
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Home() {
    const products = await getData();

    return (
        <main className="flex min-h-screen flex-row items-center justify-between p-24">
            {products.map((product: Object, index: number) => (
                <div className="border-solid border-2 w-1/5" key={index}>
                    <p>{product?.name}</p>
                    <p>{product?.price}$</p>
                </div>
            ))}
        </main>
    );
}
