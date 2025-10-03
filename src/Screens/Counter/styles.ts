import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 30,
    color: '#333',
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 60,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
});