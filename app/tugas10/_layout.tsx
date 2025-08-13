import { Stack } from 'expo-router';

export default function Tugas10Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#667eea',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Daftar Mahasiswa',
          headerTitleAlign: 'center'
        }} 
      />
      <Stack.Screen 
        name="[id]" 
        options={{ 
          title: 'Detail Mahasiswa',
          headerTitleAlign: 'center'
        }} 
      />
    </Stack>
  );
}