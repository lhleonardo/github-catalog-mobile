import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const reactotron = Reactotron.configure({host: '192.168.0.5'})
    .useReactNative()
    .connect();

  console.tron = reactotron;

  reactotron.clear();
}
