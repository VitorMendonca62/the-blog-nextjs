import { NextRequest, NextResponse } from 'next/server';
import { userPostSchema } from '@/shared/schemas/user';
import { verifySchema } from '@/shared/utils/verifySchema';
import CreateUserUseCase from '@/server/useCases/users/CreateUser';
import { errorInServer } from '@/server/utils/errorInServer';

export async function POST(req: NextRequest) {
  const body = { ...(await req.json()) } as IUserInput;
  const resultVerifySchema = verifySchema(body, userPostSchema);

  if (resultVerifySchema) {
    return NextResponse.json(resultVerifySchema, {
      status: resultVerifySchema.status,
    });
  }

  try {
    const { name, email, password, username } = body;

    const user: IUserInput = {
      name,
      email,
      password,
      username,
    };

    const createUserUseCase = new CreateUserUseCase();
    const response = await createUserUseCase.execute(user);
    return NextResponse.json(response, { status: response.status });
  } catch (err: unknown) {
    const responseErrorInServer = errorInServer(err);
    return NextResponse.json(responseErrorInServer, {
      status: responseErrorInServer.status,
    });
  }
}
