import { user } from '../data/userInformation';

export default function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
      reject('There was a problem with the server');
    }, 3000);
  });
}
