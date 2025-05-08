
interface Props {
  name: string
}

function Button({name}: Props ) {
  return (
    <div>{name}</div>
  )
}

export default Button