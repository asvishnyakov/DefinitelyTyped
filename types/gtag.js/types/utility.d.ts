declare namespace Gtag {
    type HasAllOrNone<T> = { [K in keyof T]?: never } | T;
    type HasAtLeastOne<T1, T2> = (T1 | T2) | (T1 & T2);
}
