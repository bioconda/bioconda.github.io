:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-autosql'
.. highlight: bash

ucsc-autosql
============

.. conda:recipe:: ucsc-autosql
   :replaces_section_title:

   create SQL and C code for permanently storing

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-autosql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-autosql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-autosql/meta.yaml>`_

   


.. conda:package:: ucsc-autosql

   |downloads_ucsc-autosql| |docker_ucsc-autosql|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-autosql

   and update with::

      conda update ucsc-autosql

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-autosql:<tag>

   (see `ucsc-autosql/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-autosql| image:: https://img.shields.io/conda/dn/bioconda/ucsc-autosql.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-autosql| image:: https://quay.io/repository/biocontainers/ucsc-autosql/status
   :target: https://quay.io/repository/biocontainers/ucsc-autosql
.. _`ucsc-autosql/tags`: https://quay.io/repository/biocontainers/ucsc-autosql?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-autosql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-autosql/README.html