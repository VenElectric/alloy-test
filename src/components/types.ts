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

export interface StateData {
  name: string
  abbreviation: string
}
