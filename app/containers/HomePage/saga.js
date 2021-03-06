/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_BEST_PLACE } from './constants';
import { API } from '../../network';
import { fetchBestPlaceSuccess } from './actions';
import { toast } from 'react-toastify';

/**
 * Github repos request/response handler
 */
// export function* getRepos() {
//   // Select username from store
//   const username = yield select(makeSelectUsername());
//   const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

//   try {
//     // Call our request helper (see 'utils/request')
//     const repos = yield call(request, requestURL);
//     yield put(reposLoaded(repos, username));
//   } catch (err) {
//     yield put(repoLoadingError(err));
//   }
// }

export function* fetchBestPlace() {
 //  debugger;
  try {
    const resp = yield call(API.fetchBestPlace);
    if (resp.code === 200) {
      console.log('lan 4  ', resp);
     //  debugger;
      yield put(fetchBestPlaceSuccess(resp));
      // toast(Messages.registerSuccess);
    } else {
      toast(resp.message);
    }
  } catch (err) {
    ////  debugger;
    // toast(Messages.registerError);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(FETCH_BEST_PLACE, fetchBestPlace);
  // yield takeLatest(LOAD_REPOS, getRepos);
}
