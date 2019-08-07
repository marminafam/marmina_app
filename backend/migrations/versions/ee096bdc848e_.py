"""empty message

Revision ID: ee096bdc848e
Revises: 9777ccd492dd
Create Date: 2019-08-07 21:09:55.293526

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ee096bdc848e'
down_revision = '9777ccd492dd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('public_id', sa.String(length=500), nullable=True))
        batch_op.add_column(sa.Column('registered_on', sa.DateTime(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_column('registered_on')
        batch_op.drop_column('public_id')

    # ### end Alembic commands ###
