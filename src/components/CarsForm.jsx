import React, { useState } from 'react';

const CarForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    speed: 0,
    color: '',
    model: '',
    year: 0,
    price: 0,
    available: false,
    brand: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://46.101.183.184:3005/api/v1/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (optional)
        console.log('Car created successfully!');
        // You might want to redirect or update the UI here
      } else {
        // Handle errors (optional)
        console.error('Failed to create car:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating car:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Car</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Speed:
          <input type="number" name="speed" value={formData.speed} onChange={handleChange} />
        </label>
        <br />
        <label>
          Color:
          <input type="text" name="color" value={formData.color} onChange={handleChange} />
        </label>
        <br />
        <label>
          Model:
          <input type="text" name="model" value={formData.model} onChange={handleChange} />
        </label>
        <br />
        <label>
          Year:
          <input type="number" name="year" value={formData.year} onChange={handleChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </label>
        <br />
        <label>
          Available:
          <input type="checkbox" name="available" checked={formData.available} onChange={handleChange} />
        </label>
        <br />
        <label>
          Brand:
          <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Create Car</button>
      </form>
    </div>
  );
};

export default CarForm;
