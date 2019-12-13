import { IComment } from 'src/app/models/comment.interface';

export default interface IAppState {
    comment: IComment;
}
export const initialAppState = (): IAppState => {
    return {
        comment: null
    }

}