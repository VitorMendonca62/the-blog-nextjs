interface INoticeInput {
  title: string;
  slug: string;
  category: string;
  author: string;
}
interface INotice extends INoticeInput {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
