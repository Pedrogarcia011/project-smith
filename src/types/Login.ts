type ServiceResponseErrorType = 400 | 401 | 402 | 403 | 404;
type ServiceResponseSucessType = 200 | 201 | 202 | 203;

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: string },
};

export type ServiceResponseSuccess<T> = {
  status: ServiceResponseSucessType 
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;