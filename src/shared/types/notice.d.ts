interface INoticeInput {
  title: string;
  content: string;
  photos: string[];
}

interface INoticeInputMeta extends INoticeInput {
  author: string;
  authorId: string;
  authorPhoto: string;
  comments: number;
  likes: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  liked: boolean;
}