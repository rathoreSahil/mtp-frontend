const BASE_URL = import.meta.env.VITE_API_URL;
export default async function Fetch(
    url: string,
    method: string,
    jwt?: string,
    body?: string,
) {
    const res = await fetch(`${BASE_URL}${url}`, {
        method,
        headers: {
            authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
        },
        body,
    });

    const data = await res.json();
    if (!res.ok) {
        if (data.message) {
            throw new Error(data.message);
        }
        throw new Error("Something went wrong!");
    }

    return data;
}
