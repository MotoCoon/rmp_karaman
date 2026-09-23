import {FlatList, StyleSheet, Text, TouchableOpacity,Pressable, View, } from 'react-native';

export default function App() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Pressable>
          <View style={styles.circle}>
            <Text style={styles.circleText}>М</Text>
          </View>
        </Pressable>
        <View style={styles.headerRightIcons}>
          <Pressable>
            <View style={styles.circle}>
            <Text style={styles.circleText}>У</Text>
          </View>
          </Pressable>
          <Pressable>
            <View style={styles.circle}>
              <Text style={styles.circleText}>К</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.circle}>
              <Text style={styles.circleText}>Т</Text>
            </View>
          </Pressable>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <View style={styles.sectionDot} />
        <Text style={styles.sectionTitle}>Избранное</Text>
      </View>

      <FlatList 
      style={styles.list} 
      contentContainerStyle={styles.listContent}
      data ={[
        'Обратная связь',
        'Оплата мобильной связи',
        'Мобильный платеж',
        'Перевод по номеру карты',
        'Переводилка',
        'Подписка',
        'Мои штрафы',
        'Конвертация валют',
        'Драгоценные материаллы',
        'Мои шаблоны',
        'Денежные переводы',
      ]}
      renderItem={ ({ item, index }) => (
        <TouchableOpacity key={index} style={styles.listItem}>
          <View style={styles.itemIcon} />
          <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
      )}
      />

      <View style={styles.tabBar}>
        <Pressable>
          <View style={styles.tabCircle} >
            <Text style={styles.tabText}>И</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.tabCircle} >
            <Text style={styles.tabText}>К</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.tabCircle} >
            <Text style={styles.tabText}>С</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.tabCircle} >
            <Text style={styles.tabText}>П</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.tabCircle} >
            <Text style={styles.tabText}>О</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#4B5A85',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerRightIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#AEB6DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  sectionHeader: {
    backgroundColor: '#C3C9E6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
  },
  sectionDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#4B5A85',
  },
  sectionTitle: {
    color: '#2E3350',
    fontSize: 14,
    fontWeight: '600',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDF5',
  },
  itemIcon: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#C7CBEA',
  },
  itemText: {
    fontSize: 14,
    color: '#2E3350',
  },
  tabBar: {
    backgroundColor: '#4B5A85',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
  },
  tabCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#AEB6DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
