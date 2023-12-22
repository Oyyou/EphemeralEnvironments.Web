import { useEffect, useState } from "react";
import { API_BASE_URL } from "./apiConfig"

const getVibes = async (): Promise<string[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/vibes`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`Error fetching vibes: ${response.statusText}`);
        }

        const vibes = await response.json();
        return vibes;
    } catch {
        throw new Error("Failed vibe check");
    }
}

export const useGetVibes = () => {
    const [vibes, setVibes] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();


    useEffect(() => {
        const runGetVibes = async () => {
            try {
                const vibes = await getVibes();
                setVibes(vibes);
            } catch (error: any) {
                setVibes([
                    '=('
                ])
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        runGetVibes();
    }, []);

    return {
        vibes,
        isLoading,
        error,
    }
}