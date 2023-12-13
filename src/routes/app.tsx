import { useGetVibes } from "api/vibesApi";


const AppRoute = () => {
    const { vibes, isLoading: isLoadingVibes, error } = useGetVibes();

    if (isLoadingVibes) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {vibes.map((v, i) => (
                <p key={v && i}>{v}</p>
            ))}
        </div>
    );
};

export default AppRoute