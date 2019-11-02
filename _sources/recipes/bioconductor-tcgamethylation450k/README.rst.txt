:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgamethylation450k'
.. highlight: bash

bioconductor-tcgamethylation450k
================================

.. conda:recipe:: bioconductor-tcgamethylation450k
   :replaces_section_title:

   The Cancer Genome Atlas \(TCGA\) is applying genomics technologies to over 20 different types of cancer.  This package contains a small set of 450k array data in idat format.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/TCGAMethylation450k.html
   :license: GPL-2
   :recipe: /`bioconductor-tcgamethylation450k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgamethylation450k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgamethylation450k/meta.yaml>`_

   


.. conda:package:: bioconductor-tcgamethylation450k

   |downloads_bioconductor-tcgamethylation450k| |docker_bioconductor-tcgamethylation450k|

   :versions: 1.21.0-0, 1.20.0-1, 1.20.0-0, 1.18.0-0
   
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tcgamethylation450k

   and update with::

      conda update bioconductor-tcgamethylation450k

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcgamethylation450k:<tag>

   (see `bioconductor-tcgamethylation450k/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcgamethylation450k| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgamethylation450k.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcgamethylation450k
   :alt:   (downloads)
.. |docker_bioconductor-tcgamethylation450k| image:: https://quay.io/repository/biocontainers/bioconductor-tcgamethylation450k/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgamethylation450k
.. _`bioconductor-tcgamethylation450k/tags`: https://quay.io/repository/biocontainers/bioconductor-tcgamethylation450k?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgamethylation450k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgamethylation450k/README.html