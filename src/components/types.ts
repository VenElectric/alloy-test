export interface CustomerData {
  name_first: string;
  name_last: string;
  phone_number: string;
  email_address: string;
  address_line_1: string;
  address_line_2: string;
  address_city: string;
  address_state: string;
  address_postal_code: string;
  address_country_code: string;
  birth_date: string;
  document_ssn: string;
}
export enum OutComes {
  APPROVED = "Approved",
  DENIED = "Denied",
  MANUAL_REVIEW = "Manual Review"
}

export enum RouteNames {
  PendingReviewPage = "PendingReviewPage",
  FailurePage = "FailurePage",
  SuccessPage = "SuccessPage",
  ErrorPage = "ErrorPage",
  CustomerForm = "CustomerForm",
} 