export default (alignment?: string) => {
  if (alignment === 'center') {
    return 'items-center text-center'
  }

  if (alignment === 'right') {
    return 'items-end text-right'
  }

  return 'items-start text-left'
}
