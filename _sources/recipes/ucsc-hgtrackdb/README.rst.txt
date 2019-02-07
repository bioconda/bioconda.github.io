.. title:: Package Recipe 'ucsc-hgtrackdb'
.. highlight: bash


ucsc-hgtrackdb
==============

.. conda:recipe:: ucsc-hgtrackdb
   :replaces_section_title:

   Create trackDb table from text files.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgtrackdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgtrackdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgtrackdb/meta.yaml>`_

   


.. conda:package:: ucsc-hgtrackdb

   |downloads_ucsc-hgtrackdb| |docker_ucsc-hgtrackdb|

   :versions: 366, 357

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-hgtrackdb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgtrackdb

   and update with::

      conda update ucsc-hgtrackdb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hgtrackdb


.. |required_by_ucsc-hgtrackdb| conda:required_by:: ucsc-hgtrackdb
.. |downloads_ucsc-hgtrackdb| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgtrackdb.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hgtrackdb| image:: https://quay.io/repository/biocontainers/ucsc-hgtrackdb/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgtrackdb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgtrackdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgtrackdb/README.html

