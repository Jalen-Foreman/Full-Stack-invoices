# Full-Stack-invoices
A serverless app that utilizes React.js for the frontend, hosting invoice data. The React.js application is then publically hosted on AWS S3. The data for the invoices comes from DynamoDB database. I use API Gateway and AWS Lambda to create a lambda function that retrieves the data from DynamoDB which then gets hosted utilizing API Gateway. I fetch the data from API Gateway and connect the data from DynamoDB to the state within the React.js application. 

# Website hosting on AWS S3
http://project-invoices-aws.s3-website.us-east-2.amazonaws.com/

# Technologies Used

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- AWS API Gateway ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
- AWS S3  ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
- ![AmazonDynamoDB](https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white)
- AWS Lambda  ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
## Wireframe

<img width="1318" alt="Screen Shot 2021-09-09 at 9 38 46 PM" src="https://user-images.githubusercontent.com/78430591/132784932-8b034966-a7a2-41c3-9012-86a3df81c7ab.png">

### Development

- VS Code
- Google Chrome + Developer Tools
