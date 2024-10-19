import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        quantityL: 0,
        quantityM: 0,
        quantityS: 0
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
            quantityL: 0,
            quantityM: 0,
            quantityS: 0
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                placeholder="Tshirt Name"
                required />
            <input
                name="description"
                placeholder="Description"
                required />
            <input
                name="price"
                placeholder="Price"
                required />
            <input
                name="quantityL"
                placeholder="L Size"
                required />
            <input name="quantityM"
                placeholder="M Size"
                required />
            <input name="quantityS"
                placeholder="S Size"
                required />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;
