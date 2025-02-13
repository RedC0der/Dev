
# 📽️ Video Hosting Platform 🚀

## 🎬 About the Project
This is a **feature-rich backend system** for a **video hosting platform**. Built using **Node.js, Express.js, and MongoDB**, the project follows best backend development practices, ensuring **scalability, security, and performance optimization**.

## 🌟 Features

### 🔐 Authentication & Security
✅ Secure **JWT-based authentication** (Access & Refresh Tokens)  
✅ **Bcrypt password encryption** for enhanced security  
✅ **Role-based access control** for different user types  

### 🎥 Video Management
✅ Users can **upload, delete, and manage videos**  
✅ **Cloudinary integration** for optimized media storage  
✅ **Thumbnails & metadata management** for videos  

### ⚡ Performance & Optimization
✅ **Mongoose aggregate pipeline** for efficient query handling  
✅ **Pagination** for better API performance  
✅ **Caching mechanisms** to reduce load times  

## 🛠️ Tech Stack
| **Technology** | **Usage** |
|--------------|-------------|
| **Node.js** | Backend runtime |
| **Express.js** | Server-side framework |
| **MongoDB & Mongoose** | Database & ORM |
| **JWT & Bcrypt** | Authentication & security |
| **Cloudinary** | Video storage |
| **Multer** | File upload handling |
| **CORS & dotenv** | Security & environment management |

## 🛠️ Tech Stack
| **Technology** | **Usage** |
|----------------|-----------|
| **Node.js**    | Backend runtime |
| **Express.js** | Server-side framework |
| **MongoDB & Mongoose** | Database & ORM |
| **JWT & Bcrypt** | Authentication & security |
| **Cloudinary** | Video storage |
| **Multer** | File upload handling |
| **CORS & dotenv** | Security & environment management |

---

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Redc0der/Dev.git
   cd Dev
Install dependencies

npm install
Configure environment variables
Create a .env file in the root directory and add the following:


PORT=6000
MONGODB_URI=mongodb+srv://your_username:your_password@your-cluster.mongodb.net
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=your_secret_key
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_secret_key
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


Start the server

npm run dev
🎯 API Endpoints
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	User login
POST	/api/videos/upload	Upload a video
GET	/api/videos/:id	Get video details
🎯 Future Enhancements
✅ Video search & recommendations

✅ Analytics dashboard for creators

✅ Live streaming feature

🏆 Contribution
We welcome contributions! Feel free to fork the repository and submit pull requests.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙏 Support
If you find this project helpful, consider giving it a ⭐️ on GitHub!


