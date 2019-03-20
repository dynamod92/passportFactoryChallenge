﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using update_dotnet_redux_proj;

namespace update_dotnet_redux_proj.Migrations
{
    [DbContext(typeof(FactoryContext))]
    [Migration("20190319231631_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.3-servicing-35854");

            modelBuilder.Entity("update_dotnet_redux_proj.Child", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("childName");

                    b.Property<int>("factoryId");

                    b.HasKey("id");

                    b.ToTable("Children");
                });

            modelBuilder.Entity("update_dotnet_redux_proj.Factory", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("factoryName");

                    b.HasKey("id");

                    b.ToTable("Factories");
                });
#pragma warning restore 612, 618
        }
    }
}