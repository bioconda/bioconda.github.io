:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-axtswap'
.. highlight: bash

ucsc-axtswap
============

.. conda:recipe:: ucsc-axtswap
   :replaces_section_title:

   Swap source and query in an axt file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-axtswap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-axtswap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-axtswap/meta.yaml>`_

   


.. conda:package:: ucsc-axtswap

   |downloads_ucsc-axtswap| |docker_ucsc-axtswap|

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

      conda install ucsc-axtswap

   and update with::

      conda update ucsc-axtswap

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-axtswap:<tag>

   (see `ucsc-axtswap/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-axtswap| image:: https://img.shields.io/conda/dn/bioconda/ucsc-axtswap.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-axtswap| image:: https://quay.io/repository/biocontainers/ucsc-axtswap/status
   :target: https://quay.io/repository/biocontainers/ucsc-axtswap
.. _`ucsc-axtswap/tags`: https://quay.io/repository/biocontainers/ucsc-axtswap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-axtswap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-axtswap/README.html