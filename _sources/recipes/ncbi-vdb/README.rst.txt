.. title:: Package Recipe 'ncbi-vdb'
.. highlight: bash


ncbi-vdb
========

.. conda:recipe:: ncbi-vdb
   :replaces_section_title:

   VDB is the database engine that all SRA tools use. It is a columnar database system with a number of unique features. All SRA objects are stored in VDB.

   :homepage: https://github.com/ncbi/ncbi-vdb
   :license: Public Domain
   :recipe: /`ncbi-vdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-vdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-vdb/meta.yaml>`_

   


.. conda:package:: ncbi-vdb

   |downloads_ncbi-vdb| |docker_ncbi-vdb|

   :versions: 2.9.3, 2.9.1, 2.9.0

   :depends: 

   :required~by: |required_by_ncbi-vdb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncbi-vdb

   and update with::

      conda update ncbi-vdb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ncbi-vdb


.. |required_by_ncbi-vdb| conda:required_by:: ncbi-vdb
.. |downloads_ncbi-vdb| image:: https://img.shields.io/conda/dn/bioconda/ncbi-vdb.svg?style=flat
   :alt:   (downloads)
.. |docker_ncbi-vdb| image:: https://quay.io/repository/biocontainers/ncbi-vdb/status
   :target: https://quay.io/repository/biocontainers/ncbi-vdb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-vdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-vdb/README.html

