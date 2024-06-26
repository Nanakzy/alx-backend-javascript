import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoData, userData] = results;
      console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
