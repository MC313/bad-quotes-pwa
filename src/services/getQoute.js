const handleError = (error) => {
    console.error("Error getting quote", error);
    return { error: "Error getting quote" };
}

export default async function () {
    try {
        const res = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
        const [resObject] = await res.json();
        return resObject;
    } catch (error) {
        return handleError(error);
    }
}