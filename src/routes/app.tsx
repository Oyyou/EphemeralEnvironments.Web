import { useVibes } from "api/vibesApi";
import { CreateVibe, VibesDropDown } from "components";

const AppRoute = () => {
    const {
        vibes,
        isLoading: isLoadingVibes,
        error,
        createVibe
    } = useVibes();
    
    return (
        <div>
            <VibesDropDown vibes={vibes} isLoading={isLoadingVibes} error={error} />
            <CreateVibe createVibe={createVibe} />
        </div>
    );
};

export default AppRoute