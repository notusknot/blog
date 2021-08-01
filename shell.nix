with import <nixpkgs> { };

mkShell {
    buildInputs = [
        python39Packages.pygments
        xclip
    ];
}
