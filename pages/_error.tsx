import { Result, Button } from "antd";
import { ResultStatusType } from "antd/lib/result";
import Link from "next/link";
import { GetServerSideProps } from 'next'

const SERVER_ERROR =
  "Something went wrong! We didn't anticipate this taking so long.";
const NOT_FOUND = "Sorry, the page you visited does not exist.";
const UNAUTHORIZED = "Sorry, you are not authorized to access this page.";

export const getServerSideProps: GetServerSideProps = async (appContext) => {
  const errorCode = appContext.res.statusCode;

  return {
    props: { errorCode },
  };
}

interface IProps { 
  errorCode: ResultStatusType
}

export default function Page({ errorCode }: IProps) {
  let message = "There is something wrong!!!";
  switch (errorCode) {
    case 403:
      message = UNAUTHORIZED;
      break;
    case 404:
      message = NOT_FOUND;
      break;
    case 500:
      message = SERVER_ERROR;
      break;
    default:
      errorCode = 500;
      message = SERVER_ERROR;
  }

  return (
    <>
      <Result
        status={errorCode}
        title={errorCode}
        subTitle={message}
        extra={[
          <Button type="primary" ghost key={"homebtn"}>
            <Link href={"/"}>
              <a>Back Home</a>
            </Link>
          </Button>,
          <Button
            type="primary"
            ghost
            onClick={() => window.history.back()}
            key={"ppbtn"}
          >
            Back Previous Page
          </Button>,
        ]}
      />
    </>
  );
}
