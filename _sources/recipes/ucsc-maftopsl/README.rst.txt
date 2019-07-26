:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-maftopsl'
.. highlight: bash

ucsc-maftopsl
=============

.. conda:recipe:: ucsc-maftopsl
   :replaces_section_title:

   Convert maf to psl format

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-maftopsl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maftopsl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maftopsl/meta.yaml>`_

   


.. conda:package:: ucsc-maftopsl

   |downloads_ucsc-maftopsl| |docker_ucsc-maftopsl|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 324-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-maftopsl

   and update with::

      conda update ucsc-maftopsl

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-maftopsl:<tag>

   (see `ucsc-maftopsl/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-maftopsl| image:: https://img.shields.io/conda/dn/bioconda/ucsc-maftopsl.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-maftopsl
   :alt:   (downloads)
.. |docker_ucsc-maftopsl| image:: https://quay.io/repository/biocontainers/ucsc-maftopsl/status
   :target: https://quay.io/repository/biocontainers/ucsc-maftopsl
.. _`ucsc-maftopsl/tags`: https://quay.io/repository/biocontainers/ucsc-maftopsl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-maftopsl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-maftopsl/README.html