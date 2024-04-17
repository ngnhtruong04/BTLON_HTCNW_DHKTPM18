    // Dữ liệu mẫu về món ăn
    const foods = [{
            name: "Gà nướng mật ong",
            description: "Một phần gà nướng mật ong đậm đà, với lớp vỏ ngoài giòn và màu nâu hấp dẫn.",
            imageUrl: "../img/mon_an/ga-nuong-mat-ong.jpg",
            pageUrl: "../html/recipe/ga-nuong-mat-ong.html"
        },
        {
            name: "Bánh xèo",
            description: "Miếng bánh xèo nóng hổi, nhân thịt heo thơm phức, thường được thưởng thức cùng bún và nước sốt chua ngọt.",
            imageUrl: "../img/mon_an/banh-xeo.jpg",
            pageUrl: "../html/recipe/banh-xeo.html"
        },
        {
            name: "Bắp cải xào",
            description: "Bắp cải xào tươi ngon, thấm gia vị, là một phần không thể thiếu trong bữa ăn hằng ngày.",
            imageUrl: "../img/mon_an/bap-cai-xao.jpg",
            pageUrl: "../html/recipe/bap-cai-xao.html"
        },
        {
            name: "Canh khoai mỡ",
            description: "Canh khoai mỡ đậm đà vị, với sự hòa quyện của các nguyên liệu tạo nên một hương vị đặc trưng.",
            imageUrl: "../img/mon_an/canh-khoai-mo.jpg",
            pageUrl: "../html/recipe/canh-khoai-mo.html"
        },
        {
            name: "Cơm tấm",
            description: "Cơm tấm hấp dẫn với thịt heo xào nước mắm và trứng chiên giòn.",
            imageUrl: "../img/mon_an/com-tam.jpg",
            pageUrl: "../html/recipe/com-tam.html"
        },
        {
            name: "Phở",
            description: "Một tô phở nóng hổi, với hương thơm của nước dùng ngọt tự nhiên và sự mềm mại của thịt bò.",
            imageUrl: "../img/mon_an/pho.jpg",
            pageUrl: "../html/recipe/pho.html"
        },
        {
            name: "Trứng chiên",
            description: "Trứng gà chiên giòn vàng, là một món ăn sáng dễ chế biến và hấp dẫn.",
            imageUrl: "../img/mon_an/trung-chien.jpg",
            pageUrl: "../html/recipe/trung-chien.html"
        },
        {
            name: "Canh bầu sườn heo",
            description: "Canh bầu sườn heo thơm ngon, với bầu tươi và thịt sườn thấm gia vị.",
            imageUrl: "../img/mon_an/canh-bau-suon-heo.jpg",
            pageUrl: "../html/recipe/canh-bau-suon-heo.html"
        },
        {
            name: "Canh bắp cải cà chua",
            description: "Canh bắp cải cà chua tươi mát, với hương vị dễ chịu và bổ dưỡng.",
            imageUrl: "../img/mon_an/canh-bap-cai-ca-chua.jpg",
            pageUrl: "../html/recipe/canh-bap-cai-ca-chua.html"
        },
        {
            name: "Thịt heo kho tiêu",
            description: "Thịt heo kho tiêu thơm phức, nước sốt đậm đà, kết hợp hoàn hảo với cơm trắng.",
            imageUrl: "../img/mon_an/thit-heo-kho-tieu.jpg",
            pageUrl: "../html/recipe/thit-heo-kho-tieu.html"
        }

    ];

    const itemsPerPage = 4;
    let currentPage = 1;

    // Hàm hiển thị các món ăn cho một trang nhất định
    function displayFoods(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const foodList = document.getElementById("foodList");
        foodList.innerHTML = ""; // Xóa các mục trước đó
        for (let i = startIndex; i < endIndex && i < foods.length; i++) {
            const foodItem = foods[i];
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            const image = document.createElement("img");
            const name = document.createElement("h2");
            const description = document.createElement("p");
            const viewMoreBtn = document.createElement("button");

            image.src = foodItem.imageUrl;
            image.alt = foodItem.name;
            link.href = foodItem.pageUrl;
            name.textContent = foodItem.name;
            description.textContent = foodItem.description;
            viewMoreBtn.textContent = "Xem thêm";

            link.appendChild(image);
            link.appendChild(name);
            listItem.appendChild(link);
            listItem.appendChild(description);
            listItem.appendChild(viewMoreBtn);
            foodList.appendChild(listItem);

            viewMoreBtn.addEventListener("click", function() {
                window.location.href = foodItem.pageUrl; // Chuyển đến trang HTML của món ăn
            });
        }
    }



    // Hàm cập nhật phân trang
    function updatePagination() {
        const totalPages = Math.ceil(foods.length / itemsPerPage);
        const pagination = document.getElementById("pagination");
        pagination.textContent = `${currentPage} / ${totalPages}`;
    }

    // Hiển thị ban đầu
    displayFoods(currentPage);
    updatePagination();

    // Bắt sự kiện cho các nút phân trang
    document.getElementById("firstPage").addEventListener("click", function() {
        currentPage = 1;
        displayFoods(currentPage);
        updatePagination();
    });

    document.getElementById("prevPage").addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            displayFoods(currentPage);
            updatePagination();
        }
    });

    document.getElementById("nextPage").addEventListener("click", function() {
        const totalPages = Math.ceil(foods.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayFoods(currentPage);
            updatePagination();
        }
    });

    document.getElementById("lastPage").addEventListener("click", function() {
        const totalPages = Math.ceil(foods.length / itemsPerPage);
        currentPage = totalPages;
        displayFoods(currentPage);
        updatePagination();
    });

    // Ví dụ về thêm một món ăn mới
    function addFood(newFood) {
        foods.push(newFood);
        displayFoods(currentPage);
        updatePagination();
    }

    // Ví dụ về thêm một món ăn mới khi nút được nhấp
    document.getElementById("addFoodButton").addEventListener("click", function() {
        const newFoodName = prompt("Nhập tên của món ăn mới:");
        const newFoodDescription = prompt("Nhập mô tả của món ăn mới:");
        const newFoodImageUrl = prompt("Nhập URL của hình ảnh cho món ăn mới:");
        const newFoodPageUrl = prompt("Nhập URL của trang cho món ăn mới:");
        if (newFoodName && newFoodDescription && newFoodImageUrl && newFoodPageUrl) {
            const newFood = { name: newFoodName, description: newFoodDescription, imageUrl: newFoodImageUrl, pageUrl: newFoodPageUrl };
            addFood(newFood);
        }
    });