export function suma(valores: string): number {
    let resultado: number = 0;
    valores.trim().split(/[ ,:;]+/).map((valor: string) => {
        resultado += parseFloat(valor);
    });
    return resultado;
}