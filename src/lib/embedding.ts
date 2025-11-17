export async function getEmbeddings(text: string) {
    try {
        // call your local embedding server instead of OpenAI
        const response = await fetch("http://127.0.0.1:8000/embed", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: text.replace(/\n/g, " "),
            }),
        });

        if (!response.ok) {
            throw new Error(`Local embed server error: ${response.status}`);
        }

        const result = await response.json();

        // result.embedding is already a 1D number[]
        return result.embedding as number[];
    } catch (error) {
        console.log("error calling local embeddings api", error);
        throw error;
    }
}
