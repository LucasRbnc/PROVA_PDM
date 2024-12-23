import React from 'react';
import { View, Text, FlatList, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import books from '../data/books.json';
import { BookList, Books } from '../types/type';

interface BookListScreenProps{
  navigation: any;
}

const BookListScreen: React.FC<BookListScreenProps> = ({navigation}) => {
  const bookData: BookList = books;

  const handlePress = (course: string) =>{
    navigation.navigate('Details', {course})
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={bookData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: { item: Books }) => (
          <View style={styles.bookItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.author}</Text>
            <Text>{item.publisher}</Text>
            <Text>{item.year}</Text>
            <TouchableOpacity onPress={() =>  handlePress(item.course)}>
              <Text style={styles.course}>{item.course}</Text>
            </TouchableOpacity>
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
  bookItem: { 
    padding: 10, 
    marginVertical: 5, 
    backgroundColor: '#f2f2f2', 
    borderRadius: 5 
},
  title: { 
    fontWeight: 'bold', 
    fontSize: 16 
},
  course: {
    textDecorationLine: 'underline'
}
});

export default BookListScreen;
