function midpoint(n, a, b) {
    let i;
    let s = 0;
    let h = (b - a) / n;
    let x = a + h / 2;
    for (i = 0; i < n; i++) {
        s += f(x);
        x += h;
    }
    return s * h;
}
let f = x => ... /* Inserisci la funzione 'f' della quale vuoi calcolare l'integrale definito nell'intervallo specificato con gli argomenti 'a' e 'b' della funzione 'midpoint' */