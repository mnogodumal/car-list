import React from 'react';
import { Table } from 'antd';
import { Car } from '../types/Car';

interface CarTableProps {
  cars: Car[];
}

const CarTable: React.FC<CarTableProps> = ({ cars }) => {
  const columns = [
    { title: 'ID', dataIndex: '_id', key: '_id' },
    { title: 'Марка/Модель', dataIndex: 'mark', key: 'mark', render: (_: any, car: Car) => `${car.mark} / ${car.model}` },
    { title: 'Комплектация', dataIndex: 'equipmentName', key: 'equipmentName' },
    { title: 'Стоимость', dataIndex: 'price', key: 'price', render: (price: number) => `${price.toLocaleString()} ₽` },
    { title: 'Дата создания', dataIndex: 'createdAt', key: 'createdAt', render: (date: string) => new Date(date).toLocaleDateString() },
  ];

  return (
    <Table columns={columns} dataSource={cars} rowKey="_id" pagination={{ pageSize: 20 }} />
  );
};

export default CarTable;
