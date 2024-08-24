import { NextRequest, NextResponse } from 'next/server';
import { verifySchema } from '@/shared/utils/verifySchema';
import { userLoginSchema } from '@/shared/schemas/user';
import LoginUser from '@/server/useCases/users/LoginUser';
import { errorInServer } from '@/server/utils/errorInServer';

export async function POST(req: NextRequest) {
  const body = { ...(await req.json()) } as IUserLogin;

  const resultVerifySchema = verifySchema(body, userLoginSchema);

  if (resultVerifySchema) {
    return NextResponse.json(resultVerifySchema, {
      status: resultVerifySchema.status,
    });
  }

  try {
    const { email, password } = body;

    const loginUser = new LoginUser();

    const response = await loginUser.execute(email, password);

    if (response.error) {
      return NextResponse.json(response, { status: response.status });
    }

    const responseNext = NextResponse.json(response, {
      status: response.status,
    });
    responseNext.cookies.set('USER-TOKEN', response.token as string, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      secure: true,
      sameSite: 'strict',
    });

    return responseNext;
  } catch (err: any) {
    const responseErrorInServer = errorInServer(err);

    return NextResponse.json(responseErrorInServer, {
      status: responseErrorInServer.status,
    });
  }
}
