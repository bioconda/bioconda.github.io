:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iaseq'
.. highlight: bash

bioconductor-iaseq
==================

.. conda:recipe:: bioconductor-iaseq
   :replaces_section_title:

   It fits correlation motif model to multiple RNAseq or ChIPseq studies to improve detection of allele\-specific events and describe correlation patterns across studies.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/iASeq.html
   :license: GPL-2
   :recipe: /`bioconductor-iaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iaseq/meta.yaml>`_
   :links: biotools: :biotools:`iaseq`, doi: :doi:`10.1186/1471-2164-13-681`

   


.. conda:package:: bioconductor-iaseq

   |downloads_bioconductor-iaseq| |docker_bioconductor-iaseq|

   :versions: 1.28.0-0, 1.26.1-0, 1.24.0-0, 1.22.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iaseq

   and update with::

      conda update bioconductor-iaseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iaseq:<tag>

   (see `bioconductor-iaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iaseq
   :alt:   (downloads)
.. |docker_bioconductor-iaseq| image:: https://quay.io/repository/biocontainers/bioconductor-iaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iaseq
.. _`bioconductor-iaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-iaseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iaseq/README.html