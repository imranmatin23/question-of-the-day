terraform {
  backend "s3" {
    bucket = "imatin-personal-tfstate"
    key    = "question-of-the-day-frontend/terraform.tfstate"
    region = "us-west-2"
  }
}