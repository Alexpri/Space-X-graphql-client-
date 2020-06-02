import gql from 'graphql-tag';

export const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launchesPast (limit: 10) {
            id
            mission_name
            launch_success
            launch_date_local
            details
        }
    }
`
