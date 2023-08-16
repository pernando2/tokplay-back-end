# Mid Term Project Gigih (Backend Only)
# Description
Ini adalah project Mid-Term dari generasi gigih yaitu untuk membuat API sederhana dari tokopedia play sebagai referensi.

# How to Install & Run
Clone the repo using git
```bash
git clone https://github.com/pernando2/mid-term.git
```
then run :
```bash
npm install
```
Run the server
```bash
npm run start
```
or
```bash
npm start
```
and then the server will run at the http://localhost:3000/ as default.

# Database Structure
Videos Collection
```bash
{
    _id: number
    title: string
    thumbnailUrl: string
}
```
Products Collection
```bash
{
    _id: number
    videoID: number
    Title: string
    Price: number
    LinkProduct: string 
}
```

Comments Collection
```bash
{
    _id: number
    videoID: number
    Username: string
    Comment: string
    timestamps: date 
}
```

# API STRUCTURE
![API Structre](./assets/img/arsitektur%20mid%20term.png)

# API Request and Response
## Videos
### Request GET all videos
```bash
  GET /api/getAllVideo
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none`    | `none`   | `none`                     |
### Response
content
```bash
  [
    {
        <videos object>
    }
  ]
```
### Request POST videos
```bash
  POST /api/postvideo
```
| Parameter  | Body      | Description                |
|:-----      | :-------- | :------------------------- |
| `Body`     | {title,thumbnailUrl}    | `argumen untuk videos` |                    |
### Response
content
```
{
    "message": "Video berhasil ditambahkan.",
    "data": {<videos.object>}
}
```

## Products
### Request GET Product
```bash
  GET /api/getproduct/(VideoID)
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `argument`    | `number`   | `videoID yang dimiliki oleh document products untuk mencari data products`                     |
### Response when success
content
```bash
  [
    {
        - ProductId
        - Link Product
        - Title
        - Price
    }
  ]
```

### Response when failed
content
```bash
"error": "Product tidak ditemukan."
```
or 

content
```bash
"error": "Gagal mendapatkan Product dari Video."
```

### Request POST Products
```bash
  POST /api/postproduct/(videoID)
```
| Parameter  | params      | Description                |
|:-----      | :-------- | :------------------------- |
| `params`     | videoID    | `parameter untuk insert videoID ke documents products` |                    |


| Parameter  | body      | Description                |
|:-----      | :-------- | :------------------------- |
| `body`     | {title,price,linkproduct}    | `body yang dikirimkan kepada post product` |                    |

### Response when success
content
```bash
{
    "message": "Product berhasil ditambahkan.",
    "data": {<products.object>}
}
```

## Comments
### Request GET Comments
```bash
  METHOD GET /api/getcomment/(VideoID)
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `argument`    | `number`   | `videoID yang dimiliki oleh document comments untuk mencari data comments`                     |
### Response when success
content
```bash
  [
    {
        - Username
        - Comment
        - timestamp
    }
  ]
```
### Response when failed
content
```bash
"error": "Comment tidak ditemukan."
```
or 

content
```bash
"error": "Gagal Mendapatkan comment dari video"
```



### Request POST Comments
```bash
  METHOD POST /api/postcomment/(videoID)
```
| Parameter  | params      | Description                |
|:-----      | :-------- | :------------------------- |
| `params`     | videoID    | `parameter untuk insert videoID ke documents comments` |                    |


| Parameter  | body      | Description                |
|:-----      | :-------- | :------------------------- |
| `body`     | {username,comment}    | `body yang dikirimkan kepada post comments` |                    |

### Response when success
content
```bash
"Success"
```

### Response when failed
content
```bash
"Fail"
```