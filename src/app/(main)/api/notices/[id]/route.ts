'use server';

import ShowNoticeUseCase from '@/server/useCases/notices/ShowNotice';
import { errorInServer } from '@/server/utils/errorInServer';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/api/notices/')[1];

  if (id === null || id === undefined) {
    return NextResponse.json(
      {
        error: true,
        status: 404,
        msg: 'É necessario o ID',
        data: {},
      },
      {
        status: 404,
      },
    );
  }

  try {
    const showNoticeUseCase = new ShowNoticeUseCase();
    const response = await showNoticeUseCase.one(id as string);
    return NextResponse.json(response, { status: response.status });
  } catch (err) {
    const responseErrorInServer = errorInServer(err);
    return NextResponse.json(responseErrorInServer, {
      status: responseErrorInServer.status,
    });
  }
}
