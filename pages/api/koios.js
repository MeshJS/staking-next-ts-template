import { KoiosProvider } from '@meshsdk/core';

export default async function handler(req, res) {
    const address = req.query.address;
    const apiKey = process.env.KOIOS_API_KEY;

    if (!address) {
        return res.status(400).json({ message: "The server cannot process the request due to invalid input." });
    }

    if (!apiKey) {
        return res.status(401).json({ message: "Access token is missing or invalid." });
    }

    try {
        const koiosProvider = new KoiosProvider('api', apiKey);
        const data = await koiosProvider.fetchAccountInfo(address);
        console.error(data);
        // Assuming the fetch was successful and data is valid
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);

        // Check if the error has a status code
        if (error.response && error.response.status) {
            // Directly use the API's status code for the response
            const message = error.response.data && error.response.data.message ? error.response.data.message : 'An error occurred';
            console.error(message);
            return res.status(error.response.status).json({ message });

        } else {
            // If no status code is available, fallback to a generic server error
            return res.status(500).json({ message: "Internal server errors." });
        }
    }
}
