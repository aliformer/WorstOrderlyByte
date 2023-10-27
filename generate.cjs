const fs = require('fs');

// Function to generate a random date within a date range
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const data = [];

for (let i = 0; i < 300; i++) {
    const entry = {
        appId: `app_${Math.floor(Math.random() * 10) + 1}`,
        campaigns: [
            {
                name: `Campaign ${String.fromCharCode(65 + Math.floor(Math.random() * 3))}`,
                createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)).toISOString(),
                expiredAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)).toISOString(),
                message: `Message for Campaign ${Math.floor(Math.random() * 10) + 1}`,
            },
            {
                name: `Campaign ${String.fromCharCode(68 + Math.floor(Math.random() * 3))}`,
                createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)).toISOString(),
                expiredAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)).toISOString(),
                message: `Message for Campaign ${Math.floor(Math.random() * 10) + 1}`,
            }
        ],
        userId: `user_${Math.floor(Math.random() * 1000)}`,
        deviceId: `device_${Math.floor(Math.random() * 500)}`,
        lastVisit: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)).toISOString(),
    };

    data.push(entry);
}

// Save the data to a JSON file
fs.writeFileSync('./public/mock-api.json', JSON.stringify(data, null, 2));