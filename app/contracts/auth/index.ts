
export interface LoginFormValuesInterface {
    phone: string
}

export interface RegisterFormValuesInterface {
  name: string;
  phone: string;
  email: string;
  password: string;
}


export interface PhoneVerifyFormValuesInterface {
    code : string
    token : string
}