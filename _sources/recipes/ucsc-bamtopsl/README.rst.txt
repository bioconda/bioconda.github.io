:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bamtopsl'
.. highlight: bash

ucsc-bamtopsl
=============

.. conda:recipe:: ucsc-bamtopsl
   :replaces_section_title:

   Convert a bam file to a psl and optionally also a fasta file that contains the reads.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bamtopsl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bamtopsl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bamtopsl/meta.yaml>`_

   


.. conda:package:: ucsc-bamtopsl

   |downloads_ucsc-bamtopsl| |docker_ucsc-bamtopsl|

   :versions: 377-1, 377-0, 366-0, 357-2, 357-1, 357-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.1.1a,<1.1.2a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bamtopsl

   and update with::

      conda update ucsc-bamtopsl

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-bamtopsl:<tag>

   (see `ucsc-bamtopsl/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bamtopsl| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bamtopsl.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-bamtopsl
   :alt:   (downloads)
.. |docker_ucsc-bamtopsl| image:: https://quay.io/repository/biocontainers/ucsc-bamtopsl/status
   :target: https://quay.io/repository/biocontainers/ucsc-bamtopsl
.. _`ucsc-bamtopsl/tags`: https://quay.io/repository/biocontainers/ucsc-bamtopsl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bamtopsl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bamtopsl/README.html