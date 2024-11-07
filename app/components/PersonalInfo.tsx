import React from 'react';

const PersonalInfo = () => {
    return (
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 max-w-md mx-auto mt-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Personal Info</h2>
            <div className="text-gray-700">
                <p className="text-lg mb-2"><strong>Name:</strong> Zakiya Aulia</p>
                <p className="text-lg mb-2"><strong>TTL:</strong> Sumedang, 27 November 2003</p>
                <p className="text-lg mb-2"><strong>Jenis Kelamin:</strong> Perempuan</p>
                <p className="text-lg mb-2"><strong>Tinggi Badan:</strong> 165 cm</p>
                <p className="text-lg mb-2"><strong>Berat Badan:</strong> 64 kg</p>
                <p className="text-lg mb-2"><strong>Status Pernikahan:</strong> Belum Menikah</p>
                <p className="text-lg mb-2"><strong>Whatsapp:</strong> 089522322779</p>
                <p className="text-lg"><strong>Email:</strong> zakiyabugs27@gmail.com</p>
            </div>
        </div>
    );
};

export default PersonalInfo;
