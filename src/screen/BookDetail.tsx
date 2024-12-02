import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import books from '../data/books.json';
import { BookList,Books } from '../types/type';

interface BookDetailScreenProps {
    route: any;
  }
  
const BookDetailScreen: React.FC<BookDetailScreenProps> = ({ route }) => {
  const { course } = route.params;
  const filteredBooks:BookList = books.filter((book: Books) => book.course === course);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Livros da Disciplina: {course}</Text>
      
      <FlatList 
        data={filteredBooks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: { item: Books }) => (
          <View style={styles.bookItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.author}</Text>
            <Text>{item.publisher}</Text>
            <Text>{item.year}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 10 
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  bookItem: { 
    padding: 10, 
    marginVertical: 5, 
    backgroundColor: '#f2f2f2', 
    borderRadius: 5 
  },
  title: { 
    fontWeight: 'bold', 
    fontSize: 16 
  }
});

export default BookDetailScreen;
