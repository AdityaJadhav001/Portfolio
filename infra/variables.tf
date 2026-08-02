variable "region" {
  type        = string
  default     = "ap-south-1"
  description = "Region for the origin bucket. CloudFront and ACM are global/us-east-1."
}

variable "bucket_name" {
  type        = string
  description = "Globally unique S3 bucket for the built site."
}

variable "domain_name" {
  type        = string
  description = "Apex domain, e.g. adityajadhav.dev"
}

variable "github_repo" {
  type        = string
  description = "owner/repo allowed to assume the deploy role."
}
