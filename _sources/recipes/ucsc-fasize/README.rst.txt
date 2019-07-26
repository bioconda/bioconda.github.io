:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-fasize'
.. highlight: bash

ucsc-fasize
===========

.. conda:recipe:: ucsc-fasize
   :replaces_section_title:

   print total base count in fa files.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fasize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fasize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fasize/meta.yaml>`_

   


.. conda:package:: ucsc-fasize

   |downloads_ucsc-fasize| |docker_ucsc-fasize|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fasize

   and update with::

      conda update ucsc-fasize

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-fasize:<tag>

   (see `ucsc-fasize/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-fasize| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fasize.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-fasize
   :alt:   (downloads)
.. |docker_ucsc-fasize| image:: https://quay.io/repository/biocontainers/ucsc-fasize/status
   :target: https://quay.io/repository/biocontainers/ucsc-fasize
.. _`ucsc-fasize/tags`: https://quay.io/repository/biocontainers/ucsc-fasize?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fasize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fasize/README.html