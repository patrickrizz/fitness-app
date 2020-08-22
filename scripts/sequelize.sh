#!/bin/bash
PS3="Enter the number you want to do : "
select task in models migrations seeds none; do
    case $task in
    models)
        read -p "Enter model name " name
        #read -p "Enter models path Ex. ./models " models_path
        #read -p "Enter migrations path Ex. ./migrations " migrations_path
        read -p "Enter model attributes Ex. username:string,password:string " attributes
        #npx sequelize model:generate --name $name --models-path $models_path --migrations-path $migrations_path --attributes $attributes
        npx sequelize model:generate --name $name --models-path ./models --migrations-path ./migrations --attributes $attributes
        ;;
    migrations)
        PS3="Enter the number you want to do : "
        select task in migrate status undo undo_all; do
            case $task in
            migrate)
                npx sequelize db:migrate
                ;;
            status)
                npx sequelize db:migrate:status
                ;;
            undo)
                npx sequelize db:migrate:undo
                ;;
            undo_all)
                npx sequelize db:migrate:undo:all
                ;;
            *)
                echo "Error: Please try again (select 1..3)!"
                ;;
            esac
        done
        ;;
    seeds)
        PS3="Enter the number you want to do : "
        select task in seed seed_all generate_seed undo undo_all; do
            case $task in
            seed)
                npx sequelize db:seed
                ;;
            seed_all)
                npx sequelize db:seed:all
                ;;
            generate_seed)
                read -p "Enter seeder name " name
                read -p "Enter seeder path Ex. ./models " seeders_path
                npx sequelize seed:generate --name $name --seeders-path $seeders_path
                ;;
            undo)
                npx sequelize db:seed:undo
                ;;
            undo_all)
                npx sequelize db:seed:undo:all
                ;;
            *)
                echo "Error: Please try again (select 1..3)!"
                ;;
            esac
        done
        ;;
    none)
        exit
        ;;
    *)
        echo "Error: Please try again (select 1..3)!"
        ;;
    esac
done
