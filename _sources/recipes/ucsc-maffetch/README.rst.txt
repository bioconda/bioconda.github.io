:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-maffetch'
.. highlight: bash

ucsc-maffetch
=============

.. conda:recipe:: ucsc-maffetch
   :replaces_section_title:

   get overlapping records from an MAF using an index table

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-maffetch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maffetch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maffetch/meta.yaml>`_

   


.. conda:package:: ucsc-maffetch

   |downloads_ucsc-maffetch| |docker_ucsc-maffetch|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 324-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   
   :depends libuuid: >=2.32.1,<3.0a0
   
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   
   :depends openssl: >=1.0.2p,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-maffetch

   and update with::

      conda update ucsc-maffetch

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-maffetch:<tag>

   (see `ucsc-maffetch/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-maffetch| image:: https://img.shields.io/conda/dn/bioconda/ucsc-maffetch.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-maffetch| image:: https://quay.io/repository/biocontainers/ucsc-maffetch/status
   :target: https://quay.io/repository/biocontainers/ucsc-maffetch
.. _`ucsc-maffetch/tags`: https://quay.io/repository/biocontainers/ucsc-maffetch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-maffetch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-maffetch/README.html