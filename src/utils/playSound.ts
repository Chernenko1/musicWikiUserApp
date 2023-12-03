import Sound from 'react-native-sound';

export const playSound = (sound: string) => {
  Sound.setCategory('Playback');
  console.log(sound);
  var whoosh = new Sound(
    'http://10.0.2.2:4848/' + sound,
    Sound.MAIN_BUNDLE,
    error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          whoosh.getDuration() +
          'number of channels: ' +
          whoosh.getNumberOfChannels(),
      );

      // Play the sound with an onEnd callback
      whoosh.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    },
  );
};
