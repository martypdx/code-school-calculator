export function getSalary( amount ) {
    let h = (+amount)*.012;
    h = Math.max( h, 0 );
    h = Math.min( h, 90 );
    return h;
}

export function getNet( amount ) {

    const result = Math.abs((+amount))/50000/2*100;

    // console.log( amount, result );

    return result;
}