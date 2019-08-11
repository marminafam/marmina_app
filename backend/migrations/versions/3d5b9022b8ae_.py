"""empty message

Revision ID: 3d5b9022b8ae
Revises: ee096bdc848e
Create Date: 2019-08-11 12:08:36.412757

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3d5b9022b8ae'
down_revision = 'ee096bdc848e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('graduation_year', sa.String(length=10), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_column('graduation_year')

    # ### end Alembic commands ###
