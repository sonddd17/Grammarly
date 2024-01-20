
# EEET2582 - Group assignment - Group 5
## Grosana application

Grosana is a tool helping user to proof reading their documents by checking grammar, vocabulary by ultizing AI technology. This application is expected to assist people who are conducting academic researches, especially for non-native English speakers. The advantage  of this app is that it is free, compared to other existing players like Grammarly and Quillbot. Depending on customer's demand, the app still offer advanced subscription plans to unlock advanced features.
## Features

- Upload documents in .docx format
- Download revised documents
- Login/ Signup with account
- Upgrade subscriptions


## Architecture

This backend application follows the microservice concepts which utilises the advantage of cloud computing services (AWS RDS, S3) for data storage instead of using local database (SQLite).
The reason for that is the team want to get practical experiences with industry trend as well as have some fundamentals in cloud service usage.

*At this moment, the app runs locally due to time constraints and technical issues but will be updated soon.*
## Tech Stack

**AWS S3**: Storing BLOB file like .docx file

**AWS RDS**: Storing user data (user details, transaction details, etc)

**Payment process**: Stripe API

**Language**: NodeJS, Python, ReactJS (UI)

**Flask**: Backend framework

## Installation and Instruction

This is the whole project folder structure.

```
GRAMMARLY
└── backend
│   └── .venv
│   └── node_modules
│   └── base.py
│   └── package-lock.json
│   └── package.json
│   └── requirements.txt
│   └── app
│       └── app.py
│       └── config.py
│       └── models.py
│       └── views.py
│
└── 📁grammarly
    └── .gitignore
    └── README.md
    └── package-lock.json
    └── package.json
    └── 📁public
        └── app_icon.ico
        └── favicon.ico
        └── index.html
        └── logo192.png
        └── manifest.json
        └── robots.txt
    └── 📁src
        └── .eps
        └── App.css
        └── App.js
        └── App.test.js
        └── 📁Auth
            └── Auth.css
            └── Login.js
            └── Register.js
            └── facebook.png
            └── google.png
        └── 📁PageComponent
            └── Account.js
            └── MainPage.js
            └── Menu.js
            └── MyGrammarly.js
            └── Premium.js
            └── SearchBar.js
            └── Trash.js
            └── 📁about_us
                └── AboutUs.js
                └── TeamMember.js
            └── 📁account
                └── Profile.js
                └── UserInfo.js
            └── 📁homepage
                └── DocumentCard.js
            └── 📁subscription_plan
                └── PriceCard.js
                └── SubscriptionPlan.js
        └── Router.js
        └── 📁Styles
            └── AboutUs.css
            └── DocumentCard.css
            └── Homepage.css
            └── PriceCard.css
            └── Profile.css
            └── Uploader.css
        └── 📁assets
            └── logo-black.png
            └── logo-color.png
            └── logo-no-background.png
            └── logo-white.png
            └── nhan-avatar.jpeg
            └── qanh-avatar.jpeg
            └── son-avatar.jpeg
            └── tri-avatar.jpeg
            └── word_doc.png
        └── 📁configs
            └── aws-exports.js
        └── index.css
        └── index.js
        └── logo.svg
        └── 📁models
            └── S3Singleton.js
        └── reportWebVitals.js
        └── setupTests.js

```

**For Back-end**

Step 1: At root folder (GRAMMARLY), go to "backend" folder
```bash
cd backend
```

Step 2: Create and Activate virtual environment
```bash
python3 -m venv .venv
source .venv/bin/activate                                                
```

Step 3: Check if dependencies are installed already
```bash
pip/ pip3 list
```

Step 4: If no dependencies, installing them and check again.
```bash
pip install -r requirements.txt
pip list
```

Step 5: To run backend, go "app" folder and run app.py file
```bash
cd app
python/ python3 app.py
```

**For Front-end**

Step 1: At root folder (GRAMMARLY), go to "grammarly" folder
```bash
cd grammarly
```

Step 2: Install dependencies/ libraries
```bash
npm install
npm audit fix --force
```

Step 3: Run front-end
```bash
npm start
```



## Authors and Contributions 

- [Tri Lai - s3799602](https://github.com/Tri-Lai) (30%)
- [Anh Phan - s3810148](https://github.com/s3810148) (20%)
- [Son Tran - s3818468](https://github.com/sonddd17) (30%)
- [Nhan Vu - s3810151](https://github.com/s3810151) (20%)


## Demo

[Demonstration](https://rmiteduau-my.sharepoint.com/:v:/g/personal/s3799602_rmit_edu_vn/EUo-nWi95INJiMiN3nhpG8ABCq_h_d87XEIDV1Lrfju_Nw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=cm5Qby
)

## Screenshots

![Homepage](https://i.postimg.cc/3xwZGb7L/Screenshot-2024-01-20-at-21-59-52.png)

![Homepage](https://i.postimg.cc/9fmHy206/Screenshot-2024-01-20-at-22-01-18.png)

![Account](https://i.postimg.cc/yxqfXhnD/Screenshot-2024-01-20-at-21-57-40.png)

![About us](https://i.postimg.cc/MGTrWpvp/Screenshot-2024-01-20-at-21-58-35.png)

![Upgrade](https://i.postimg.cc/KcLpcVvB/Screenshot-2024-01-20-at-21-58-49.png)



## Acknowledgements

 - [Flask documentation](https://flask.palletsprojects.com/en/3.0.x/)
 - [W3School](https://www.w3schools.com/)
 - [AWS documentation](https://docs.aws.amazon.com/?nc2=h_ql_doc_do)
 - [RMIT learning materials](https://rmit.instructure.com/)
 - [Digital Ocean](https://www.digitalocean.com/)
 - [Figma](https://www.figma.com/)

