const paginator = {
  limit: 20,
  offset: 0,
};

export function setOffset(offset) {
  paginator.offset = offset;
}

export function getOffset() {
  return paginator.offset;
}

export function getLimit() {
  return paginator.limit;
}
