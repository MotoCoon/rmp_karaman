import { useState } from 'react';
import { Button, Text, View } from 'react-native';

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        Меня зовут {props.name}, и я {isHungry ? 'голодный' : 'сытый'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'дайте мне еды, пожалуйста!' : 'спасибо!'}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <View style={{ flex: 1 }}>
      <Cat name="Пушистик" />
      <Cat name="Кузя" />
      <Cat name="Мурзик" />
    </View>
  );
};

export default Cafe;