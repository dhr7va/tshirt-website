import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        quantityL: '',
        quantityM: '',
        quantityS: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(formData);
        setFormData({
            name: '',
            description: '',
            price: '',
            quantityL: '',
            quantityM: '',
            quantityS: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tshirt Name"
                required />
            <input
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                required />
            <input
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price"
                required />
            <input
                name="quantityL"
                value={formData.quantityL}
                onChange={handleInputChange}
                placeholder="L Size"
                required />
            <input name="quantityM"
                value={formData.quantityM}
                onChange={handleInputChange}
                placeholder="M Size"
                required />
            <input name="quantityS"
                value={formData.quantityS}
                onChange={handleInputChange}
                placeholder="S Size"
                required />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;
