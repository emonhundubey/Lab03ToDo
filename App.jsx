/**
 * My To Do App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { useState } from 'react'; 


function App() {
  const [todos, setTodos] = useState([
 'Do laundry',
  'Go to gym',
  'Walk dog']);
  return (
    <SafeAreaView>
       <ToDoList tasks={todos} />
    </SafeAreaView>
  );
}



export default App;