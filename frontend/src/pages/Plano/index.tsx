import { PlanoGraph } from '../../components/PlanoGraph';
import { PlanoDashboard } from './PlanoDashboard';
import StudyCards from './StudyCards';
import styles from './styles.module.css';


export const Plano = () => {
    return (
        <div className={styles.container}>
            <PlanoDashboard />
            <PlanoGraph />
            <StudyCards />
        </div>
    )
}

export default Plano;