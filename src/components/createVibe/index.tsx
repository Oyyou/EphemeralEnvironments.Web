import { FC, FormEvent, useState } from "react"

type CreateVibeProps = {
    createVibe: (value: string) => Promise<boolean>;
}

const CreateVibe: FC<CreateVibeProps> = ({ createVibe }) => {
    const [vibe, setVibe] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [vibeCreated, setVibeCreated] = useState(false);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLoading) {
            return;
        }

        try {
            setIsLoading(true);
            const vibeCreated = await createVibe(vibe);
            setVibeCreated(vibeCreated);
        } catch (e) {
            console.error(e);
        } finally {
            setVibe('');
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Create a vibe:</h2>
            <input type='text' value={vibe} onChange={(e) => setVibe(e.target.value)} />
            <input type='submit' value="Submit" disabled={isLoading} />
            {vibeCreated &&
                <p>You successfully submitted a vibe 😊</p>
            }
        </form>
    );
};

export default CreateVibe;