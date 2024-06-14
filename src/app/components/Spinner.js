import Image from "next/image";
export default function Spinner() {
    return(
     <Image 
     width={80}
     height={80}
     src="/tadpole.svg"
     alt="Imagem carregando" />
    );
}