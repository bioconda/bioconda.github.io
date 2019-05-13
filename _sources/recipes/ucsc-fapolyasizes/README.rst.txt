:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-fapolyasizes'
.. highlight: bash

ucsc-fapolyasizes
=================

.. conda:recipe:: ucsc-fapolyasizes
   :replaces_section_title:

   get poly A sizes

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fapolyasizes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fapolyasizes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fapolyasizes/meta.yaml>`_

   


.. conda:package:: ucsc-fapolyasizes

   |downloads_ucsc-fapolyasizes| |docker_ucsc-fapolyasizes|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fapolyasizes

   and update with::

      conda update ucsc-fapolyasizes

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-fapolyasizes:<tag>

   (see `ucsc-fapolyasizes/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-fapolyasizes| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fapolyasizes.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-fapolyasizes
   :alt:   (downloads)
.. |docker_ucsc-fapolyasizes| image:: https://quay.io/repository/biocontainers/ucsc-fapolyasizes/status
   :target: https://quay.io/repository/biocontainers/ucsc-fapolyasizes
.. _`ucsc-fapolyasizes/tags`: https://quay.io/repository/biocontainers/ucsc-fapolyasizes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fapolyasizes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fapolyasizes/README.html