.. title:: Package Recipe 'ucsc-xmltosql'
.. highlight: bash


ucsc-xmltosql
=============

.. conda:recipe:: ucsc-xmltosql
   :replaces_section_title:

   Convert XML dump into a fairly normalized relational database

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-xmltosql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-xmltosql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-xmltosql/meta.yaml>`_

   


.. conda:package:: ucsc-xmltosql

   |downloads_ucsc-xmltosql| |docker_ucsc-xmltosql|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-xmltosql|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-xmltosql

   and update with::

      conda update ucsc-xmltosql

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-xmltosql


.. |required_by_ucsc-xmltosql| conda:required_by:: ucsc-xmltosql
.. |downloads_ucsc-xmltosql| image:: https://img.shields.io/conda/dn/bioconda/ucsc-xmltosql.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-xmltosql| image:: https://quay.io/repository/biocontainers/ucsc-xmltosql/status
   :target: https://quay.io/repository/biocontainers/ucsc-xmltosql







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-xmltosql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-xmltosql/README.html

