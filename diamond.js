function diamondGenerator(height) {
    let diamond = '';

    for (let i = 0; i < height; i++) {
        let spaces = Math.abs(i - Math.floor(height / 2));
        let stars = height - 2 * spaces;

        diamond += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
    }

    console.log(diamond);
}
diamondGenerator(3);
diamondGenerator(6);