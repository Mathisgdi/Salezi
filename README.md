# 🚀 Strapi Project


## ⚙️ Install of all dépendences

Install all dependencies by entering this command in the terminal

````bash
npm i
````

## ⚙️ Start your Strapi

To launch your Strapi application with autoReload enabled, enter this command in the terminal

```bash
 npm run develop 
 ```

To launch your Strapi application with autoReload disabled, enter this command in the terminal

```bash
npm run start
```

## API documentation

You can find the documentation of the API here:
http://localhost:1337/documentation/v1.0.0#/

## Grafana installation

Install the correct version of [Grafana](https://grafana.com/docs/grafana/latest/setup-grafana/installation/) on your computer, Windows if you're on Windows, Mac if you're on Mac and Linux if you're on Linux. 

Import the `sqlite` plugin in Grafana.
Put this command in the terminal. 

```bash
grafana-cli plugins install frser-sqlite-datasource
```

Go to http://localhost:3000 , add new datasource and choose the path of data.db. 

Import `Grafana Dashboard.json`.
It's your dashboard viewer.


-----
Mathis Ghidotti <br>
Mayeul Gras

