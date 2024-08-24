import CreateNoticeUseCase from '@/server/useCases/notices/CreateUser';
import ShowNoticeUseCase from '@/server/useCases/notices/ShowNotice';
import { errorInServer } from '@/server/utils/errorInServer';
import { noticePostSchema } from '@/shared/schemas/notice';
import { verifySchema } from '@/shared/utils/verifySchema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = { ...(await req.json()) } as INoticeInput;
  const resultVerifySchema = verifySchema(body, noticePostSchema);

  if (resultVerifySchema) {
    return NextResponse.json(resultVerifySchema, {
      status: resultVerifySchema.status,
    });
  }

  try {
    const { author,  slug, title } = body;

    const notice: INoticeInput = {
      author,
      slug,
      title,
    };

    const createNoticeUseCase = new CreateNoticeUseCase();
    const response = await createNoticeUseCase.execute(notice);
    return NextResponse.json(response, { status: response.status });
  } catch (err: unknown) {
    const responseErrorInServer = errorInServer(err);
    return NextResponse.json(responseErrorInServer, {
      status: responseErrorInServer.status,
    });
  }
}

export async function GET() {
  try {
    const showNoticeUseCase = new ShowNoticeUseCase();
    const response = await showNoticeUseCase.all();
    return NextResponse.json(response, { status: response.status });
  } catch (err) {
    const responseErrorInServer = errorInServer(err);
    return NextResponse.json(responseErrorInServer, {
      status: responseErrorInServer.status,
    });
  }
}
