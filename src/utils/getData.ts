import {useEffect} from 'react';
import {useAppDispatch} from '../redux/hooks';
import {
  setAlbums,
  setCities,
  setGroups,
  setMusicStyle,
  setRoles,
} from '../redux/slices/groupSlice';
import {fetchGroups} from '../http/groupAPI';
import {fetchRoles} from '../http/roleAPI';
import {fetchCities} from '../http/cityAPI';
import {fetchMusicS} from '../http/musicStyleAPI';
import {fetchAlbums, fetchAllAlbums} from '../http/albumAPI';
import {fetchBandMembers} from '../http/bandMembers';
import {fetchConcerts} from '../http/concertAPI';
import {fetchSongs} from '../http/songAPI';
import {fetchPrs} from '../http/prAPI';
import {fetchAwards} from '../http/awardsAPI';

export const getData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchGroups()
      .then(data => dispatch(setGroups(data.groups.rows)))
      .catch(e => console.log(e));
    fetchRoles()
      .then(data => dispatch(setRoles(data)))
      .catch(e => console.log(e));
    fetchCities()
      .then((data: any) => dispatch(setCities(data)))
      .catch(e => console.log(e));
    fetchMusicS()
      .then(data => dispatch(setMusicStyle(data.musicStyle)))
      .catch(e => console.log(e));
  }, []);
};
