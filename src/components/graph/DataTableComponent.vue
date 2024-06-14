<script>
export default {
    name: "DataTableComponent",
    data() {
        return {
            tableData: [
                { category: "Productos", link: "http://20.224.64.191:8080/api/v1/products/export-excel" },
                { category: "Supermercados", link: "http://20.224.64.191:8080/api/v1/products/excel" }
            ]
        }
    }
}
</script>

<template>
    <section class="section">
        <h2 class="flex justify-content-center">Archivos Relevantes</h2>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Categoría</th>
                        <th>Descargar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in tableData" :key="index">
                        <td>{{ item.category }}</td>
                        <td>
                            <a :href="item.link" target="_top" class="decoration">
                                <Button icon="pi pi-download"/>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    <p class="complement-text">
            <i class="pi pi-info-circle"/>Los archivos disponibles contienen información privada y detallada sobre los productos de diversos supermercados. 
            El archivo de "Productos" incluye una lista exhaustiva de todos los productos disponibles. 
            En el archivo de "Supermercados" se encuentra un gráfico que muestra características importantes, 
            como el precio máximo del queso en cada supermercado.
    </p>
</template>

<style scoped>
.table-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    margin: 0 auto;
}
table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px; /* Add spacing between rows */
}
table th, table td {
    padding: 15px 20px; /* Add more padding to cells */
    text-align: left;
    border: 1px solid #ddd;
}
table th {
    background-color: #faedc4;
}
.complement-text {
    padding: 8px;
    font-size: 1rem;
    color: #333;
    text-align: center;
    max-width: 100%;
    display: flex;
    justify-content: center;
}
.decoration {
    text-decoration: none;
}
</style>
