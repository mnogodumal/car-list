import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import axios from 'axios';
import CarTable from './components/CarTable';
import { Car } from './types/Car';

const { Option } = Select;

const App: React.FC = () => {
  const [marks, setMarks] = useState<string[]>([]);
  const [selectedMark, setSelectedMark] = useState<string | undefined>(undefined);
  const [models, setModels] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/marks');
        setMarks(response.data);
      } catch (error) {
        console.error('Ошибка получения марок:', error);
      }
    };
    fetchMarks();
  }, []);

  useEffect(() => {
    if (selectedMark) {
      const fetchModels = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/api/models?mark=${selectedMark}`);
          setModels(response.data);
        } catch (error) {
          console.error('Ошибка получения моделей:', error);
        }
      };
      fetchModels();
    }
  }, [selectedMark]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/cars', {
          params: { mark: selectedMark, models: selectedModels },
        });
        setCars(response.data);
      } catch (error) {
        console.error('Ошибка получения автомобилей:', error);
      }
    };
    fetchCars();
  }, [selectedMark, selectedModels]);

  return (
    <div className="App">
      <h1>Список автомобилей</h1>
      <Select
        placeholder="Выберите марку"
        onChange={setSelectedMark}
        style={{ width: 200, marginBottom: 16 }}
      >
        {marks.map((mark) => (
          <Option key={mark} value={mark}>
            {mark}
          </Option>
        ))}
      </Select>
      {selectedMark && (
        <Select
          mode="multiple"
          placeholder="Выберите модель"
          onChange={setSelectedModels}
          style={{ width: 200, marginBottom: 16 }}
        >
          {models.map((model) => (
            <Option key={model} value={model}>
              {model}
            </Option>
          ))}
        </Select>
      )}
      <CarTable cars={cars} />
    </div>
  );
};

export default App;