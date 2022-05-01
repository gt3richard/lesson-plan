# Lesson Plan

## How To Build

1) Run `yarn run resize` to generate all the images sizes needed.
2) Run `yarn build` to compile the website
3) Copy the contents of /build to `s3://domain.com/`

## How to Host in AWS

### S3 setup
1) Create an S3 bucket domain.com and copy your web contents to the root
2) In `Permissions > Public access settings` set everything to false to allow editing of the bucket policy.
3) In `Permissions > Bucket Policy` copy this setting
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::domain.com/*"
        }
    ]
}
```
4) In `Properties > Static website hosting` select `Use this bucket to host a website` and set the `index document` to "index.html"

### Route 53 Setup
1) Create a new Hosted Zone and enter your domain name
2) Update your domain registar with the NS values
3) Skip down to setting up Certificate Manager and CloudFront, then return here
4) Create an Alias record for domain.com to the CloudFront target
5) Create another Alias record for www.domain.com to the CloudFront target

### Certificate Manager setup
1) Request a public certificate IN US-EAST-1 (North Virginia)!!!
2) Add your domain
3) Select DNS validation
4) Allow AWS to create a cname record in Route53 to validate
5) Wait for Status to change to Issues.
6) Wait another day until certificate is propaged to all cloudfront servers

### Cloud Front setup
1) Create a new Web Distribution
2) Set `Origin Domain Name` to the S3 bucket domain.com
3) Set `Viewer Protocol Policy` to Redirect HTTP to HTTPS
4) Set `Alternative Domain Names` to domain.com, www.domain.com
5) Select Custom SSL Certificate and select the SSL cert from Credential Manager (It may take up to a day for the cert to appear after creation)
6) Set `Default Root Object` to "index.html"
