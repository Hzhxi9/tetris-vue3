export function intervalTimer(interval) {
    let t = 0;
    return (n: any) => {
        t += n;
        if (t >= interval) {
            t = 0;
            return true
        }
        return false
    }
}