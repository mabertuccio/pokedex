const config = {
  limit: 20,
  offset: 0,
};

export function setOffset(offset) {
  config.offset = offset;
}

export function getOffset() {
  return config.offset;
}

export function getLimit() {
  return config.limit;
}
