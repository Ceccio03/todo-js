class StorageService {
    static saveData(data){
        const dataString = JSON.stringify(data);

        localStorage.setItem('todoArray', dataString);
    }

    static loadData(){
        const dataString = localStorage.getItem('todoArray');

        if (dataString) {
            const data = JSON.parse(dataString);

            return data;
        }
        return null;
    }
}