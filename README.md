🚀 DevOps CI/CD Pipeline with GitHub Actions, Docker, AWS ECR & EC2

This project implements a **complete CI/CD pipeline** for a Node.js application using:

- **GitHub Actions** (CI/CD)
- **Docker** (containerization)
- **Amazon ECR** (image registry)
- **Amazon EC2** (deployment server)
- **AWS CLI + SSH automation**

The pipeline automatically:

1️⃣ Builds Docker image  
2️⃣ Pushes image to **AWS ECR**  
3️⃣ SSHs into **EC2**  
4️⃣ Pulls latest image  
5️⃣ Stops old container  
6️⃣ Runs the new version automatically 🎉  

---

## 📌 **Project Architecture**
Developer → GitHub → GitHub Actions → Docker Build → AWS ECR → EC2 (Docker Run)

---

## 📁 **Project Structure**

devops-ci-cd-aws-project/
├── app/
│ ├── index.js # Simple Node.js app
│ ├── package.json
│ └── package-lock.json
│
├── Dockerfile # Build container image
│
└── .github/
└── workflows/
└── main.yml # CI/CD pipeline (build → push → deploy)

---
## 🐳 **Dockerfile (Used for App Image Build)**

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
----------------------------------
⚙️ CI/CD Pipeline (GitHub Actions)

Pipeline performs:

✔ Build Node.js app
✔ Create Docker image
✔ Login to AWS ECR
✔ Push image to AWS ECR
✔ SSH into EC2
✔ Pull latest Docker image
✔ Kill old container
✔ Run new version
--------------------------------
🔧 main.yml Workflow Overview
Job 1 — build-and-push
→ Builds Docker image
→ Pushes to AWS ECR

Job 2 — deploy-to-ec2
→ Connects to EC2
→ Deploys newest container

Workflow triggers automatically on every push to main branch.
------------------------------
🌐 Live Deployment
EC2 Public IP
http://YOUR_EC2_PUBLIC_IP

You will see:
👉 "CI/CD working!"
-----------------------------
🎯 Technologies Used
Tool	Purpose
GitHub Actions	CI/CD automation
Docker	App containerization
AWS ECR	Private container registry
AWS EC2	Server to run the app
Node.js	Sample backend app
SSH	Remote deployment
------------------------------
🚀 How to Deploy/Run Locally
1. Clone Repo
bash
Copy code
git clone https://github.com/Harshil074/devops-ci-cd-aws-project.git
cd devops-ci-cd-aws-project
2. Run with Docker
bash
Copy code
docker build -t myapp .
docker run -p 3000:3000 myapp
Open browser → http://localhost:3000
------------------------------
🔐 AWS Setup Required
✔ Create ECR Repository
✔ Create EC2 Instance
✔ Open port 80 in Security Group
✔ Store the following GitHub Secrets:
Secret Name	Description
AWS_ACCESS_KEY_ID	IAM user access key
AWS_SECRET_ACCESS_KEY	IAM user secret
AWS_REGION	Example: ap-south-1
EC2_HOST	EC2 public IP
EC2_USER	Usually: ec2-user
EC2_SSH_KEY	PEM file private key
------------------------------
📸 Screenshots
<img width="1912" height="667" alt="image" src="https://github.com/user-attachments/assets/c462f637-6723-4a0e-a899-aa0aa5eda362" />
<img width="1907" height="611" alt="image" src="https://github.com/user-attachments/assets/f8534274-5087-4105-94a5-a557e09346a3" />
<img width="1918" height="738" alt="image" src="https://github.com/user-attachments/assets/b129a673-f8e1-4ada-a5fc-e492df7413a3" />
<img width="1123" height="337" alt="image" src="https://github.com/user-attachments/assets/d9512e62-85ab-41ae-a411-18e69d82f635" />

🤝 Author
Harshil Bhardwaj
