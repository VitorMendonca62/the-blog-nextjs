interface INoticeInput {
  title: string;
  slug: string;
  author: string;
}
interface INotice extends INoticeInput {
  id: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
