import { useGetVibes } from "api/vibesApi";
import styles from './vibesDropDown.module.css';

const VibesDropDown = () => {
    const { vibes, isLoading: isLoadingVibes, error } = useGetVibes();

    if (isLoadingVibes) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className={styles.VibesDropDownContainer}>
            <h2>How we feelin'?</h2>
            <select>
            {vibes.map((v) => (
                <option key={v} value={v}>{v}</option>
            ))}
            </select>
        </div>
    );
}

export default VibesDropDown;