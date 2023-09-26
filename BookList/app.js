class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

class UI{
    addBookToList(book){
        const list=document.querySelector('.book-list');
        const row=document.createElement('tr');

        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
        
        list.appendChild(row);
    }

    showalert(message,className){
        //Create div
        const div=document.createElement('div');
        //Add classes
        div.className=`alert ${className}`;
        //Add text
        div.appendChild(document.createTextNode(message));
        //Get parents
        const container=document.querySelector('.container');
        //Get form
        const form=document.getElementById('book-form');
        //Insert alert
        container.insertBefore(div,form);

        //Timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);

    }
    //UI.prototpe.deleteBook=function(target){} ---->ES5 version
    deleteBook(target){
         if(target.className==='delete'){
            target.parentElement.parentElement.remove();
         }
    }

    clearField(){
        document.getElementById('author').value='';
        document.getElementById('title').value='';
        document.getElementById('isbn').value='';
    }
    
}


document.getElementById('book-form').addEventListener('submit',function(e){

    const author=document.getElementById('author').value,
          title=document.getElementById('title').value,
          isbn=document.getElementById('isbn').value;

    const book=new Book(title,author,isbn);

    const ui=new UI();

    if(title===''||author===''||isbn===''){
        ui.showalert('Please fill in all fields','error');
    }
    else{
        ui.addBookToList(book);
        ui.showalert('Book added','success');

        ui.clearField();
    }

    e.preventDefault();
});

document.querySelector('.book-list').addEventListener('click',function(e){
    const ui=new UI();
    ui.deleteBook(e.target);
    ui.showalert('Book removed!','success');
    e.preventDefault();
});