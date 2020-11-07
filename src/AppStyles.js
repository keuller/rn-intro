import { StyleSheet, Colors } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#DEDEDE',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#DEDEDE',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'darkblue'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#DDD',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#DDD',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default styles;
