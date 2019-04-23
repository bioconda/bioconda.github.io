:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bigwigcat'
.. highlight: bash

ucsc-bigwigcat
==============

.. conda:recipe:: ucsc-bigwigcat
   :replaces_section_title:

   merge non\-overlapping bigWig files

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigwigcat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigcat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigcat/meta.yaml>`_

   


.. conda:package:: ucsc-bigwigcat

   |downloads_ucsc-bigwigcat| |docker_ucsc-bigwigcat|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigwigcat

   and update with::

      conda update ucsc-bigwigcat

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-bigwigcat:<tag>

   (see `ucsc-bigwigcat/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bigwigcat| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigwigcat.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigwigcat| image:: https://quay.io/repository/biocontainers/ucsc-bigwigcat/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigwigcat
.. _`ucsc-bigwigcat/tags`: https://quay.io/repository/biocontainers/ucsc-bigwigcat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigwigcat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigwigcat/README.html