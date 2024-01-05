import { FC } from "react";
import { IVibe } from "types";
import styles from './vibesDropDown.module.css';

type VibesDropDownProps = {
    vibes: IVibe[],
    isLoading: boolean,
    error: any;
}
const VibesDropDown: FC<VibesDropDownProps> = ({vibes, isLoading, error }) => {
    if (isLoading) {
        return <p>Fetching vibes...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className={styles.VibesDropDownContainer}>
            <h2>How we feelin'?</h2>
            <select>
            {vibes.map(({id, vibe}) => (
                <option key={id} value={id}>{vibe}</option>
            ))}
            </select>
        </div>
    );
}

export default VibesDropDown;