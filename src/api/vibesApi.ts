import { useEffect, useState } from "react";
import { API_BASE_URL } from "./apiConfig"
import { IVibe } from "types";

const getVibes = async (): Promise<IVibe[]> => {
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

export const useVibes = () => {
    const [vibes, setVibes] = useState<IVibe[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const runGetVibes = async () => {
            try {
                const vibes = await getVibes();
                setVibes(vibes);
            } catch (error: any) {
                const { message } = error as Error;
                setVibes([])
                setError(message);
            } finally {
                setIsLoading(false);
            }
        };

        runGetVibes();
    }, []);

    const createVibe = async (value: string): Promise<boolean> => {
        try {
            const response = await fetch(`${API_BASE_URL}/vibes/create`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ value }),
            });

            if (!response.ok) {
                throw new Error(`Error creating vibe: ${response.statusText}`);
            }
            // This is front-end trickery pretending our vibes have been refetched
            setVibes((prev) => [
                ...prev,
                {
                    id: new Date().getMilliseconds(),
                    vibe: value,
                }
            ]);
            return true;
        } catch (e) {
            throw new Error(`Failed to create vibe: ${e}`,);
        }
    }

    return {
        vibes,
        isLoading,
        error,
        createVibe,
    }
}