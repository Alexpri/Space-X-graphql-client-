import React from 'react'
import {LAUNCHES_QUERY} from "./queries";
import LaunchItem from "../LaunchItem/LaunchItem"
import {useQuery} from "@apollo/react-hooks";
import MissionKey from "../MissionKey/MissionKey"


export default () => {
  const {loading, error, data} = useQuery(LAUNCHES_QUERY)
  console.log(data)
  if (loading) return <p>Loading ...</p>
  if (error) return <p>{error}</p>
  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey/>
      {
        data.launchesPast.map(launch => (
          <LaunchItem launch={launch} key={launch.id}/>
        ))
      }
    </>
  )
}

