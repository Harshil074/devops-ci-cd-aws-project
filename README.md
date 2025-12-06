devops-ci-cd-aws-project/
├─ app/
│  ├─ index.js           # Simple Node/Express app ("CI/CD working!")
│  ├─ package.json
│  └─ package-lock.json
├─ Dockerfile            # Node app ka Docker image build karne ke liye
└─ .github/
   └─ workflows/
      └─ main.yml        # CI/CD pipeline (build + push + deploy)
