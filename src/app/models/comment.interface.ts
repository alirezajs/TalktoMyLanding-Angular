export interface IComment {
    id: string;
    created_time: number;
    updated_time: number;
    user_id: number;
    language: 'fa' | 'en';
    country: 'IR' | 'UK' | 'USA';
    like_count: number;
    view_count: number;
    report_count: number;
    comment_count: number;
    content: string;
    comments: IComment[]
}