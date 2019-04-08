:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-twobittofa'
.. highlight: bash

ucsc-twobittofa
===============

.. conda:recipe:: ucsc-twobittofa
   :replaces_section_title:

   Convert all or part of .2bit file to fasta

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-twobittofa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-twobittofa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-twobittofa/meta.yaml>`_

   


.. conda:package:: ucsc-twobittofa

   |downloads_ucsc-twobittofa| |docker_ucsc-twobittofa|

   :versions: 377-1, 377-0, 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.1.1a,<1.1.2a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-twobittofa

   and update with::

      conda update ucsc-twobittofa

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-twobittofa:<tag>

   (see `ucsc-twobittofa/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-twobittofa| image:: https://img.shields.io/conda/dn/bioconda/ucsc-twobittofa.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-twobittofa| image:: https://quay.io/repository/biocontainers/ucsc-twobittofa/status
   :target: https://quay.io/repository/biocontainers/ucsc-twobittofa
.. _`ucsc-twobittofa/tags`: https://quay.io/repository/biocontainers/ucsc-twobittofa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-twobittofa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-twobittofa/README.html