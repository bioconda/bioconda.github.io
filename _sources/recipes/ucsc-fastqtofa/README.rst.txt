:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-fastqtofa'
.. highlight: bash

ucsc-fastqtofa
==============

.. conda:recipe:: ucsc-fastqtofa
   :replaces_section_title:

   Convert from fastq to fasta format.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fastqtofa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fastqtofa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fastqtofa/meta.yaml>`_

   


.. conda:package:: ucsc-fastqtofa

   |downloads_ucsc-fastqtofa| |docker_ucsc-fastqtofa|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fastqtofa

   and update with::

      conda update ucsc-fastqtofa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-fastqtofa:<tag>

   (see `ucsc-fastqtofa/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-fastqtofa| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fastqtofa.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-fastqtofa| image:: https://quay.io/repository/biocontainers/ucsc-fastqtofa/status
   :target: https://quay.io/repository/biocontainers/ucsc-fastqtofa
.. _`ucsc-fastqtofa/tags`: https://quay.io/repository/biocontainers/ucsc-fastqtofa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fastqtofa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fastqtofa/README.html