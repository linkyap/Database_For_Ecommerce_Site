"""
The code below is just representative of the implementation of a Bot. 
However, this code was not meant to be compiled as it. It is the responsability 
of all the students to modifify this code such that it can fit the 
requirements for this assignments.
"""

import discord
from discord.ext import commands
import os
from database import *
from model import *

TOKEN = os.environ["DISCORD_TOKEN"]

intents = discord.Intents.all()

bot = commands.Bot(command_prefix='!', intents=discord.Intents.all())

@bot.event 
async def on_ready(): 
    print(f"{bot.user.name} has joined the room")
    database = Database()
    if database._connect(): 
        # if you are here, this means that you have a succesfull connection to your database 
        print(f"{bot.user.name} is connected to the remote database") 
    else: 
        print(f"{bot.user.name} couldn't connect to the database ")
  
  



# TODO: complete the following tasks:
#       (1) Replace the commands' names with your own commands
#       (2) Write the description of your business requirement in the description parameter
#       (3) Implement your commands' methods.

@bot.command(description="Find all the employees with a email domain @mail")
async def employee_domain (ctx, domain): 
    employee = Employee()
    employees_with_domains = employee.find_email_domain(domain)
    await ctx.send(f"{employees_with_domains}")




bot.run(TOKEN)