import { friends } from '../data/friends';

export default function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(friends);
      reject('There was a problem with the server');
    }, 1000);
  });
}