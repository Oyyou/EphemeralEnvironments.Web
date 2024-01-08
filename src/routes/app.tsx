import { useVibes } from "api/vibesApi";
import { CreateVibe, Header, VibesDropDown } from "components";

const AppRoute = () => {
    const {
        vibes,
        isLoading: isLoadingVibes,
        error,
        createVibe
    } = useVibes();
    
    return (
        <div>
            <Header />
            <VibesDropDown vibes={vibes} isLoading={isLoadingVibes} error={error} />
            <CreateVibe createVibe={createVibe} />
        </div>
    );
};

export default AppRoute