import _mysql
# db=_mysql.connect()
db=_mysql.connect(host="localhost",user="lena",
                  passwd="hackatbrown",db="swearjar")
db.query("""SELECT id, entry FROM testtable""")
r=db.store_result()
row=r.fetch_row()
print(row)
row=r.fetch_row()
print(row)
