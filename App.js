import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function App() {

  const registeredUsers = [
    {
      name: 'cesar',
      age: 34,
      user: 'cesar@email.com',
      password: 12536,
      presentationVideo: {
        video: 'https://cesar.video.com/',
        videoDetails: 'This is a video that... - cesar'
      },
    },
    {
      name: 'lucas',
      age: 49,
      user: 'lucas@email.com',
      password: 25635,
      presentationVideo: {
        video: 'https://lucas.video.com/',
        videoDetails: 'This is a video that... - lucas'
      },
    },
    {
      name: 'ana',
      age: 18,
      user: 'ana@email.com',
      password: 6589,
      presentationVideo: {
        video: 'https://ana.video.com/',
        videoDetails: 'This is a video that... - ana'
      },
    },
  ]

  // Trabalhando com Promise.all - da o resultado/resolve das duas promises ao mesmo tempo.
  // const youtubeVideos = [
  //   {
  //     user: 'cesarpizzayoutube',
  //     videos: [
  //       'video01.youtube.com',
  //       'video02.youtube.com',
  //       'video03.youtube.com',
  //     ]
  //   }
  // ]

  // const facebookPosts = [
  //   {
  //     user: 'cesarpizzafacebook',
  //     posts: [
  //       'post1.facebook.com',
  //       'post2.facebook.com',
  //       'post3.facebook.com',
  //     ]
  //   }
  // ]


  // function getYoutubeVideos(user) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       for (pos in youtubeVideos) {
  //         if (youtubeVideos[pos].user === user) {
  //           let videosCopy = [];
  //           for (index in youtubeVideos[pos].videos) {
  //             videosCopy.push(youtubeVideos[pos].videos[index]);
  //           }
  //           resolve({ videos: videosCopy });
  //         }
  //       }
  //       reject({ error: new Error('Videos not found!') });
  //     }, 3000);
  //   })
  // }

  // function getFacebookPosts(user) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       for (pos in facebookPosts) {
  //         if (facebookPosts[pos].user === user) {
  //           let postsCopy = [];
  //           for (index in facebookPosts[pos].posts) {
  //             postsCopy.push(facebookPosts[pos].posts[index]);
  //           }
  //           resolve({ posts: postsCopy });
  //         }
  //       }
  //       reject({ error: new Error('Posts not found!') });
  //     }, 1500);
  //   })
  // }

  // const userYoutube = 'cesarpizzayutube'
  // const userFacebook = 'cesarpizzafacebook'

  // Promise.all([
  //   getYoutubeVideos(userYoutube).then(res => res).catch(error => error),
  //   getFacebookPosts(userFacebook).then(res => res).catch(error => error)
  // ])
  //   .then(([youtubeResult, facebookResult]) => {
  //     // resolve e reject / resultado ou erro individual
  //     if (youtubeResult.error) {
  //       console.log("Error in getYoutubeVideos:", youtubeResult.error);
  //     } else {
  //       console.log("Success in getYoutubeVideos:", youtubeResult);
  //     }

  //     if (facebookResult.error) {
  //       console.log("Error in getFacebookPosts:", facebookResult.error);
  //     } else {
  //       console.log("Success in getFacebookPosts:", facebookResult);
  //     }
  //   })
  //   catch geral/da Promise.all
  //   .catch(error => console.log("Promise.all error:", error));


  // With CallBack
  // const user = 'ana@eail.com';
  // const password = 6589;

  // function userLogin(user, password, success, error) {
  //   setTimeout(() => {
  //     for (pos in registeredUsers) {
  //       if (registeredUsers[pos].user === user && registeredUsers[pos].password === password) {
  //         console.log('User found!');
  //         success({ user, password });
  //         return;
  //       }
  //     }
  //     error({ error: new Error('User not found!') });
  //   }, 3000);
  // }

  // userLogin(user, password,
  //   (userAndPassword) => {
  //     console.log(userAndPassword);
  //     getPresentationVideo(userAndPassword);
  //   },
  //   (error) => {
  //     console.log(error.error.message);
  //   },
  // );

  // Promise
  // function userLogin(user, password) {
  //   console.log('Checking user...');
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       for (pos in registeredUsers) {
  //         if (registeredUsers[pos].user === user && registeredUsers[pos].password === password) {
  //           console.log('User logged!');
  //           resolve({ user, password });
  //           return;
  //         }
  //       }
  //       reject({ error: new Error('User not logged!') });
  //     }, 3000);
  //   })
  // }

  // function getPresentationVideo(userAndPassword) {
  //   console.log('Checking video...');
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       for (pos in registeredUsers) {
  //         if (registeredUsers[pos].user === userAndPassword.user && registeredUsers[pos].password === userAndPassword.password && registeredUsers[pos].presentationVideo.video !== '') {
  //           console.log('Video found!');
  //           resolve({ video: registeredUsers[pos].presentationVideo.video });
  //           return;
  //         }
  //       }
  //       reject({ error: new Error('Video not found!') });
  //     }, 1500);
  //   })
  // }

  // function getVideoDetails(video) {
  //   console.log('Checking video details...');
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       for (pos in registeredUsers) {
  //         if (registeredUsers[pos].presentationVideo.video === video && registeredUsers[pos].presentationVideo.videoDetails !== '') {
  //           console.log('Video details found!');
  //           resolve({ videoDetails: registeredUsers[pos].presentationVideo.videoDetails });
  //           return;
  //         }
  //       }
  //       reject({ error: new Error('Video details not found!') });
  //     }, 5000);
  //   })
  // }

  // const useR = 'ana@email.com';
  // const password = 6589;

  // Com async
  // const displayUser = async () => {
  //   try {
  //     const user = await userLogin(useR, password);
  //     console.log(user);
  //     const videos = await getPresentationVideo(user);
  //     console.log(videos);
  //     const videosDetails = await getVideoDetails(videos.video);
  //     console.log(videosDetails);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }

  // displayUser();

  // userLogin(user, password)
  //   .then(userAndPassword => getPresentationVideo(userAndPassword))
  //   .then(({ video }) => getVideoDetails(video))
  //   .then(videoDetails => console.log(videoDetails))
  //   .catch(error => console.error(error.error.message))

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />

    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});