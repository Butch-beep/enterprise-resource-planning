function Typography({ children, style }) {
  return <p className={`${style} text-base w-min`}>{children}</p>;
}

export default Typography;
