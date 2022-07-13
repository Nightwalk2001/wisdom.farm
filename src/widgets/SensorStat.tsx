type Props = {
  name: string
  value: number | string
  format?: string
}

export const SensorStat = ({name, value, format}: Props) => <div>
  <span>{name}</span>: <span className={"font-medium"}>{value} {format}</span>
</div>
