import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../themes/COLORS';

interface Props {
  describe: string;
}

export const Description: React.FC<Props> = ({describe}) => {
  const [hideText, setHideText] = useState<boolean>(false);

  return (
    <>
      {describe.length > 0 ? (
        <View style={{flex: 1, marginVertical: 10}}>
          <View>
            <Text
              style={styles.describe_text}
              numberOfLines={!hideText ? 5 : 0}>
              {describe}
            </Text>
            <Icon
              name={!hideText ? 'chevron-down-outline' : 'chevron-up-outline'}
              color={COLORS.TEXT_GRAY_COLOR}
              size={24}
              style={{alignSelf: 'center'}}
              onPress={() => setHideText(prev => !prev)}
            />
          </View>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  describe_text: {
    color: COLORS.TEXT_GRAY_COLOR,
    fontSize: 16,
  },
});
