import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ];

  return Promise.allSettled(promises)
    .then(results => {
      return results.map(result => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason
      }));
    })
    .catch(error => {
      console.error('Error in handleProfileSignup:', error);
      return []; // Return empty array if there's an unexpected error
    });
}
