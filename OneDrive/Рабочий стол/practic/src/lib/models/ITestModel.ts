export interface ITestSubItemModel {
    title: string;
    result: boolean;
}
export interface ITestItemModel {
    title: string;
    content: ITestSubItemModel[];
}
export interface ITestModel {
    head: string
    body: ITestItemModel[]
}