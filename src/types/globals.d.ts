declare type SafeNumber = number | '${number}'
declare type SafeObject<T> = T[keyof T] extends Array<any> ? T[keyof T][0] : T[keyof T]
