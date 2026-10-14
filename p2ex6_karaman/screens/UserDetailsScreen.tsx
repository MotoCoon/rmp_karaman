import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, User } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'UserDetails'>;

export default function UserDetailsScreen({ route }: Props) {
  const { id } = route.params;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`);
        if (!response.ok) {
          throw new Error(`Ошибка сервера: ${response.status}`);
        }
        setUser(await response.json());
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Неизвестная ошибка');
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error || !user) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error ?? 'Пользователь не найден'}</Text>
      </View>
    );
  }

  const rows: [string, string | number][] = [
    ['ID', user.id],
    ['Имя', user.name],
    ['Email', user.email],
    ['Пол', user.gender === 'male' ? 'мужской' : 'женский'],
    ['Статус', user.status === 'active' ? 'активен' : 'неактивен'],
  ];

  return (
    <View style={styles.container}>
      {rows.map(([label, value]) => (
        <View key={label} style={styles.row}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  row: { marginBottom: 16 },
  label: { fontSize: 14, color: '#888' },
  value: { fontSize: 18, marginTop: 2 },
  error: { color: 'red', fontSize: 16 },
});