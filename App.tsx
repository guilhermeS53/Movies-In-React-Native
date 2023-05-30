import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './src/routes';
import { MovieProvider } from './src/context/MoviesContext';

export default function App() {
  return (
    <>
      <MovieProvider>
        <Routes />
        <StatusBar style="light" translucent backgroundColor="#242A32" />
      </MovieProvider>
    </>
  );
}
