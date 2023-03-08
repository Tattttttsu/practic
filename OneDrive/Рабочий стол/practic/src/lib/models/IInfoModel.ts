
export type TagType = "h1" | "p" | "code" | "img" | "li"
export interface IInfoModel {
    type: TagType,
    content: string,
}