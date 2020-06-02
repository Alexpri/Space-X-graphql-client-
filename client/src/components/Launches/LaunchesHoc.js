import {compose} from 'recompose';
import {useQuery} from "@apollo/react-hooks";
import {LAUNCHES_QUERY} from "./queries";


const loadLaunches = useQuery(LAUNCHES_QUERY)


export default compose(loadLaunches)
