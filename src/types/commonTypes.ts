export interface MenuAndRoute {
    path: string,
    component: string | (() => Promise<typeof import("*.vue")>),
    meta: {
        icon: string,
        title: string,
    }
    children?: MenuAndRoute[]
}