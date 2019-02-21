:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-rasqlquery'
.. highlight: bash

ucsc-rasqlquery
===============

.. conda:recipe:: ucsc-rasqlquery
   :replaces_section_title:

   Do a SQL\-like query on a RA file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-rasqlquery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-rasqlquery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-rasqlquery/meta.yaml>`_

   


.. conda:package:: ucsc-rasqlquery

   |downloads_ucsc-rasqlquery| |docker_ucsc-rasqlquery|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libpng: >=1.6.34,<1.7.0a0
   
   :depends libuuid: 
   
   :depends mysql-connector-c: 
   
   :depends openssl: >=1.0.2o,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-rasqlquery

   and update with::

      conda update ucsc-rasqlquery

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-rasqlquery:<tag>

   (see `ucsc-rasqlquery/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-rasqlquery| image:: https://img.shields.io/conda/dn/bioconda/ucsc-rasqlquery.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-rasqlquery| image:: https://quay.io/repository/biocontainers/ucsc-rasqlquery/status
   :target: https://quay.io/repository/biocontainers/ucsc-rasqlquery
.. _`ucsc-rasqlquery/tags`: https://quay.io/repository/biocontainers/ucsc-rasqlquery?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-rasqlquery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-rasqlquery/README.html