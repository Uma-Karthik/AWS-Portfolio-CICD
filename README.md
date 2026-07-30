# Cloud Portfolio Website with Automated CI/CD 🚀☁️

A cloud-native personal portfolio website hosted on **AWS S3** with a fully automated **CI/CD pipeline** using **GitHub Actions**. Any code updates pushed to the repository are automatically synced to the S3 bucket for instant live updates.

---

## 📌 Architecture Overview

```text
[ Developer ]
      │
      ▼ (Git Push)
┌───────────────────────┐
│     GitHub Repo       │
└───────────┬───────────┘
            │
            ▼ (Triggers Workflow)
┌───────────────────────┐
│    GitHub Actions     │ (Builds & Syncs Web Assets)
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│     AWS S3 Bucket     │ ────► [ End Users / Web Browser ]
│ (Static Web Hosting)  │
└───────────────────────┘
```

✨ Key Features
⚡Direct S3 Hosting: Fast, lightweight static website hosting using AWS S3.
🔄 Automated Deployment (CI/CD): Pushing updates to the main branch automatically deploys updated web assets straight to S3 via GitHub Actions.
📱 Responsive Design: Mobile-friendly UI showcasing personal projects, skills, and resume.🛠️ Zero Infrastructure Maintenance: Fully serverless static hosting.
🛠️ Tech Stack
Frontend: HTML5, CSS3, JavaScript.
Cloud Infrastructure: AWS S3 (Static Website Hosting), AWS IAM.
DevOps / CI/CD: GitHub Actions, Git

📂 Repository Structure
```text
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD pipeline configuration
├── src/                    # Website source files (or root level)
│   ├── css/
│   ├── js/
│   └── index.html
└── README.md
```
🚀 CI/CD Pipeline SetupTo set up automated deployment using GitHub Actions:1. Enable Static Website Hosting on AWS S3In the AWS S3 Console, open your bucket and navigate to Properties.Scroll to Static website hosting, click Edit, choose Enable, and specify index.html.Under Permissions, disable Block all public access (if making the bucket public) and attach a Bucket Policy granting s3:GetObject access.2. Configure AWS IAM CredentialsCreate an IAM User in AWS with permissions to sync files to your bucket (s3:PutObject, s3:DeleteObject, s3:ListBucket).3. Add GitHub Repository SecretsIn your GitHub repository, go to Settings > Secrets and variables > Actions and add:Secret NameValueAWS_ACCESS_KEY_IDYour IAM Access KeyAWS_SECRET_ACCESS_KEYYour IAM Secret Access KeyAWS_REGIONYour target region (e.g., us-east-1)S3_BUCKET_NAMEYour AWS S3 bucket name⚙️ Example GitHub Actions Workflow (deploy.yml)YAMLname: Deploy Portfolio to AWS S3

💻 Local DevelopmentClone the repository:Bashgit clone [https://github.com/Uma-Karthik/Cloud-Portfolio.git](https://github.com/Uma-Karthik/Cloud-Portfolio.git)
cd Cloud-Portfolio
Run locally:Open index.html directly in your web browser to test changes before committing.
