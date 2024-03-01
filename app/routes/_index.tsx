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

const GreenLink = styled(Link)({
  color: 'green'
})

export default function Index() {
  return (
    <div>
      <H1 >Index</H1>
      <GreenLink to="/about">go to about</GreenLink>
    </div>
  );
}
