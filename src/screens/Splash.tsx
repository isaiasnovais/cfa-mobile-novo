// import { useEffect, useState } from 'react';

// import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';

// import LottieView from 'lottie-react-native';

// preventAutoHideAsync();

// type Props = {
//   onComplete: (status: boolean) => void;
// }

// export function Splash({ onComplete }: Props) {
//   const [animationFinished, setAnimationFinished] = useState(false);
//   const [lottieLoaded, setLottieLoaded] = useState(false);

//   const onAnimationFinish = () => { setAnimationFinished(true) };

//   useEffect(() => {
//     if (lottieLoaded && animationFinished) {
//       hideAsync();
//       onComplete(true);
//     }
//   }, [lottieLoaded, animationFinished]);

//   return (
//     <LottieView
//       style={{ width: "100%", height: "100%" }}
//       source={require("../../assets/json/splash-lottie.json")}
//       resizeMode='cover'
//       loop={false}
//       autoPlay={true}
//       onAnimationFailure={() => setLottieLoaded(false)}
//       onAnimationFinish={onAnimationFinish}
//     />
//   );
// }