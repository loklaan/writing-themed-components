export const defaultStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    background: 'white',
    border: 'solid 1px black',
    boxShadow: '1px 1px 0px black',
    borderRadius: '3px',
    padding: '8px',
    transition: 'transform 250ms, box-shadow 250ms',
    '&:hover': {
      transform: 'translate(-2px, -2px)',
      boxShadow: '3px 3px 0px black'
    }
  },
  prefix: {
    marginRight: '8px'
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flex: '1 1 auto',
    userSelect: 'none',
    fontFamily: '"Proxima Nova", sans-serif',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '12px'
  },
  suffix: {
    marginLeft: '8px'
  }
}

export const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh'
}
