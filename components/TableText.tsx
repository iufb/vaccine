import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const data = [
  {
    age: 'Возраст прививаемых',
    tuberculosis: 'Туберкулез',
    hepatitisB: 'Вирусный гепатит "В"',
    poliomyelitis: 'Полиомиелит',
    pertussis: 'Коклюш, дифтерия, столбняк',
    hib: 'Гемофильная инфекция типа b',
    pneumococcal: 'Пневмококковая инфекция',
    hepatitisA: 'Вирусный гепатит "А"',
    measles: 'Корь, краснуха, паротит',
    diphtheria: 'Дифтерия, столбняк',
    isHeader: true,
  },
  {
    age: '1-4 дня',
    tuberculosis: '+',
    hepatitisB: '+',
    poliomyelitis: '',
    pertussis: '',
    hib: '',
    pneumococcal: '',
    hepatitisA: '',
    measles: '',
    diphtheria: '',
  },
  {
    age: '2 месяца',
    tuberculosis: '',
    hepatitisB: '+',
    poliomyelitis: '+',
    pertussis: '+',
    hib: '+',
    pneumococcal: '+',
    hepatitisA: '',
    measles: '',
    diphtheria: '',
  },
  {
    age: '3 месяца',
    tuberculosis: '',
    hepatitisB: '',
    poliomyelitis: '+',
    pertussis: '+',
    hib: '+',
    pneumococcal: '',
    hepatitisA: '',
    measles: '',
    diphtheria: '',
  },
  {
    age: '4 месяца',
    tuberculosis: '',
    hepatitisB: '+',
    poliomyelitis: '+',
    pertussis: '+',
    hib: '+',
    pneumococcal: '+',
    hepatitisA: '',
    measles: '',
    diphtheria: '',
  },
  {
    age: '12-15 месяцев',
    tuberculosis: '',
    hepatitisB: '',
    poliomyelitis: '+',
    pertussis: '',
    hib: '',
    pneumococcal: '+',
    hepatitisA: '',
    measles: '+',
    diphtheria: '',
  },
  {
    age: '18 месяцев',
    tuberculosis: '',
    hepatitisB: '',
    poliomyelitis: '+',
    pertussis: '+',
    hib: '+',
    pneumococcal: '',
    hepatitisA: '',
    measles: '',
    diphtheria: '',
  },
  {
    age: '2 года',
    tuberculosis: '',
    hepatitisB: '',
    poliomyelitis: '',
    pertussis: '',
    hib: '',
    pneumococcal: '+',
    hepatitisA: '',
    measles: '',
    diphtheria: '',
  },
  {
    age: '2,5 года',
    tuberculosis: '',
    hepatitisB: '',
    poliomyelitis: '',
    pertussis: '',
    hib: '',
    pneumococcal: '+',
    hepatitisA: '',
    measles: '',
    diphtheria: '',
  },
  {
    age: '6 лет (1 класс)',
    tuberculosis: '',
    hepatitisB: '',
    poliomyelitis: '+',
    pertussis: '',
    hib: '',
    pneumococcal: '',
    hepatitisA: '',
    measles: '+',
    diphtheria: '',
  },
  {
    age: '16 лет и через каждые 10 лет',
    tuberculosis: '',
    hepatitisB: '',
    poliomyelitis: '',
    pertussis: '',
    hib: '',
    pneumococcal: '',
    hepatitisA: '',
    measles: '',
    diphtheria: '+',
  },
];

export const VaccinationTable = () => {
  return (
    <ScrollView horizontal>
      <View style={styles.table}>
        {data.map((item, index) => (
          <View key={index} style={[styles.tableRow, item.isHeader ? styles.tableHeader : null]}>
            <Text style={[styles.rowText, item.isHeader ? styles.headerText : null]}>
              {item.age}
            </Text>
            <Text style={[styles.rowText, item.isHeader ? styles.headerText : null]}>
              {item.tuberculosis}
            </Text>
            <Text style={[styles.rowText, item.isHeader ? styles.headerText : null]}>
              {item.hepatitisB}
            </Text>
            <Text style={[styles.rowText, item.isHeader ? styles.headerText : null]}>
              {item.poliomyelitis}
            </Text>
            <Text style={[styles.rowText, item.isHeader ? styles.headerText : null]}>
              {item.pertussis}
            </Text>
            <Text style={[styles.rowText, item.isHeader ? styles.headerText : null]}>
              {item.hib}
            </Text>
            <Text style={[styles.rowText, item.isHeader ? styles.headerText : null]}>
              {item.pneumococcal}
            </Text>
            <Text style={[styles.rowText, item.isHeader ? styles.headerText : null]}>
              {item.hepatitisA}
            </Text>
            <Text style={[styles.rowText, item.isHeader ? styles.headerText : null]}>
              {item.measles}
            </Text>
            <Text style={[styles.rowText, item.isHeader ? styles.headerText : null]}>
              {item.diphtheria}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  tableHeader: {
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  headerText: {
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  rowText: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
  },
});
