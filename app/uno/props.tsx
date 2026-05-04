// Definimos que 'nombre' debe ser un string
interface Props {
  nombre: string;
}

export default function PropsComponent({ nombre }: Props) {
  return (
    <div>
        {nombre}
    </div>
  );
}