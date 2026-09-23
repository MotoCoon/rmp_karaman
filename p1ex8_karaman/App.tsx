import { FlatList, StyleSheet, Text, Pressable, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Application</Text>
      </View>

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={[
          'Иван Иванов',
          'Борис Орлов',
          'Марк Лебедев',
          'Мария Цветкова',
          'Диана Ефимова',
          'Арина Синицина',
        ]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem} activeOpacity={0.6}>
            <View style={styles.avatar} />
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.tabBar}>
        <Pressable>
          <View style={styles.tabCircle}>
            <Text style={styles.tabText}>А</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.tabCircle}>
            <Text style={styles.tabText}>Б</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.tabCircle}>
            <Text style={styles.tabText}>В</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.tabCircle}>
            <Text style={styles.tabText}>Г</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#7D87DD',
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
    gap: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D6DAF6',
    borderRadius: 14,
    padding: 12,
    gap: 14,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8790DE',
  },
  itemText: {
    fontSize: 15,
    color: '#2E3350',
    fontWeight: '500',
  },
  alphabetBar: {
    height: 84,
    backgroundColor: '#7D87DD',
  },
  alphabetContent: {
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 10,
  },
  letterButton: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: '#6670C9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letterText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
  tabBar: {
    backgroundColor: '#7D87DD',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
  },
  tabCircle: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#6670C9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 48,
  },
});