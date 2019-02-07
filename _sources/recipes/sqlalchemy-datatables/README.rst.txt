.. title:: Package Recipe 'sqlalchemy-datatables'
.. highlight: bash


sqlalchemy-datatables
=====================

.. conda:recipe:: sqlalchemy-datatables
   :replaces_section_title:

   SQLAlchemy integration of jQuery DataTables

   :homepage: https://github.com/pegase745/sqlalchemy-datatables
   :license: MIT License
   :recipe: /`sqlalchemy-datatables <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqlalchemy-datatables>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqlalchemy-datatables/meta.yaml>`_

   


.. conda:package:: sqlalchemy-datatables

   |downloads_sqlalchemy-datatables| |docker_sqlalchemy-datatables|

   :versions: 0.3.0, 0.2.1

   :depends: :conda:package:`python` 2.7* :conda:package:`sqlalchemy`  

   :required~by: |required_by_sqlalchemy-datatables|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sqlalchemy-datatables

   and update with::

      conda update sqlalchemy-datatables

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sqlalchemy-datatables


.. |required_by_sqlalchemy-datatables| conda:required_by:: sqlalchemy-datatables
.. |downloads_sqlalchemy-datatables| image:: https://img.shields.io/conda/dn/bioconda/sqlalchemy-datatables.svg?style=flat
   :alt:   (downloads)
.. |docker_sqlalchemy-datatables| image:: https://quay.io/repository/biocontainers/sqlalchemy-datatables/status
   :target: https://quay.io/repository/biocontainers/sqlalchemy-datatables







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sqlalchemy-datatables/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sqlalchemy-datatables/README.html

