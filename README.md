# 🚀 DevOps CI/CD Pipeline with GitHub Actions, Docker, AWS ECR & EC2

![GitHub Actions Status](https://img.shields.io/github/actions/workflow/status/Harshil074/devops-ci-cd-aws-project/main.yml?label=CI%2FCD&logo=github&style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-Containerization-blue?logo=docker&style=for-the-badge)
![AWS](https://img.shields.io/badge/AWS-ECR%20%7C%20EC2-orange?logo=amazonaws&style=for-the-badge)
![NodeJS](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js&style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

This project implements a **complete CI/CD pipeline** for a Node.js application using:

- **GitHub Actions** (CI/CD automation)
- **Docker** (containerization)
- **Amazon ECR** (private image registry)
- **Amazon EC2** (deployment server)
- **AWS CLI + SSH automation**

---

## 🔥 Pipeline Workflow (Automatic)

1️⃣ Builds Docker image  
2️⃣ Pushes image to **AWS ECR**  
3️⃣ SSH into **EC2**  
4️⃣ Pulls latest Docker image  
5️⃣ Stops old container  
6️⃣ Runs new version automatically 🎉  

---

# 📌 Project Architecture

**Developer → GitHub → GitHub Actions → Docker Build → AWS ECR → EC2 (Docker Run)**

---

# 📁 Project Structure

devops-ci-cd-aws-project/
│── app/
│ ├── index.js # Simple Node.js app ("CI/CD working!")
│ ├── package.json
│ └── package-lock.json
│
│── Dockerfile # Build container image
│
│── .github/
│ └── workflows/
│ └── main.yml # CI/CD pipeline (build → push → deploy)

yaml
Copy code

---

# 🐳 Dockerfile (Used for App Image Build)

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
⚙️ GitHub Actions CI/CD Pipeline (main.yml)
Pipeline performs:

✔ Build Node.js app
✔ Create Docker image
✔ Login to AWS ECR
✔ Push image to ECR
✔ SSH to EC2
✔ Pull + run new container

Workflow triggers automatically on every push to main branch.

🌍 Live Deployment
EC2 Public IP:
http://YOUR_EC2_PUBLIC_IP

You will see:
👉 "CI/CD working!"

🧰 Technologies Used
Tool	Purpose
GitHub Actions	CI/CD automation
Docker	Containerization
AWS ECR	Private container registry
AWS EC2	Server to run the app
Node.js	Simple backend app
SSH	Remote deployment

🚀 How to Deploy / Run Locally
1️⃣ Clone Repo
bash
Copy code
git clone https://github.com/Harshil074/devops-ci-cd-aws-project.git
cd devops-ci-cd-aws-project
2️⃣ Run with Docker
bash
Copy code
docker build -t myapp .
docker run -p 3000:3000 myapp
Open browser →
http://localhost:3000

🔐 AWS Setup Required
✔ Create ECR Repository
✔ Create EC2 Instance
✔ Open Port 80 in security group
✔ Store the following GitHub Secrets:

Secret Name	Description
AWS_ACCESS_KEY_ID	IAM user key
AWS_SECRET_ACCESS_KEY	IAM user secret
AWS_REGION	ap-south-1
EC2_HOST	EC2 Public IP
EC2_USER	Usually: ec2-user
EC2_SSH_KEY	PEM file private key

📸 Screenshots
<img src="https://github.com/user-attachments/assets/c462f637-672b-4af2-9a8a-317e0ae0e8ce" width="90%"> <img src="https://github.com/user-attachments/assets/f8534274-5081-40d7-82cd-9d8d6ce97d89" width="90%"> <img src="https://github.com/user-attachments/assets/b129a673-f8ea-4afd-a91d-02ea8d8f6f0e" width="90%"> <img src="https://github.com/user-attachments/assets/d9512e62-85a5-4ea6-b76b-396bf53e6f6b" width="90%">
✍ Author
Harshil Bhardwaj
