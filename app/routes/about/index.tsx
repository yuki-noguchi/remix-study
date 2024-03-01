import type { MetaFunction } from "@remix-run/node";
import styled from "@emotion/styled";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

const H1 = styled.h1(props =>({
    color: props.theme.color.primary
  }
));

const PinkLink = styled(Link)({
  color: 'pink'
})

export default function Index() {
  return (
    <div>
      <H1 >about</H1>
      <PinkLink to="/">go to /</PinkLink>
    </div>
  );
}
