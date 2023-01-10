// menggunakan stack
class Stack {
    constructor() {
        this.barang = [];
    }

    // menambah elemen ke stack (push) 
    tambah(elemen) {
        return this.barang.push(elemen);
    }

    // menghapus elemen dari stack (pop)
    hapus() {
        if(this.barang.length > 0) {
            return;
        }
        this.barang.pop();
    }

    // melihat elemen terakhir (peek)
    lihat() {
        return this.barang[this.barang.length - 1];
    }
  

    // mengecek tumpukan kosong (isempty)
    cek() {
        return this.barang.length == 0 ;
    }


    // mengosongkan semua stack
    kosong() {
        this.barang = [];
    }

}

let stack = new Stack();
stack.tambah(1);
stack.tambah(2);
stack.tambah(4);
stack.tambah(6);
stack.tambah(8);

console.log(stack.barang);

stack.hapus();

console.log(stack.barang);

console.log(stack.lihat());

console.log(stack.cek());

console.log(stack.tambah(9));

console.log(stack.barang);


stack.kosong();
console.log(stack.barang);