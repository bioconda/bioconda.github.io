:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-ameme'
.. highlight: bash

ucsc-ameme
==========

.. conda:recipe:: ucsc-ameme
   :replaces_section_title:

   find common patterns in DNA

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-ameme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-ameme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-ameme/meta.yaml>`_

   


.. conda:package:: ucsc-ameme

   |downloads_ucsc-ameme| |docker_ucsc-ameme|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   
   :depends libuuid: >=2.32.1,<3.0a0
   
   :depends mysql-connector-c: 
   
   :depends openssl: >=1.0.2p,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-ameme

   and update with::

      conda update ucsc-ameme

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-ameme:<tag>

   (see `ucsc-ameme/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-ameme| image:: https://img.shields.io/conda/dn/bioconda/ucsc-ameme.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-ameme| image:: https://quay.io/repository/biocontainers/ucsc-ameme/status
   :target: https://quay.io/repository/biocontainers/ucsc-ameme
.. _`ucsc-ameme/tags`: https://quay.io/repository/biocontainers/ucsc-ameme?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-ameme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-ameme/README.html