:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cancer'
.. highlight: bash

bioconductor-cancer
===================

.. conda:recipe:: bioconductor-cancer
   :replaces_section_title:
   :noindex:

   A Graphical User Interface for accessing and modeling the Cancer Genomics Data of MSKCC

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/canceR.html
   :license: GPL-2
   :recipe: /`bioconductor-cancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancer/meta.yaml>`_

   The package is user friendly interface based on the cgdsr and other modeling packages to explore\, compare\, and analyse all available Cancer Data \(Clinical data\, Gene Mutation\, Gene Methylation\, Gene Expression\, Protein Phosphorylation\, Copy Number Alteration\) hosted by the Computational Biology Center at Memorial\-Sloan\-Kettering Cancer Center \(MSKCC\).


.. conda:package:: bioconductor-cancer

   |downloads_bioconductor-cancer| |docker_bioconductor-cancer|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cancer

   and update with::

      conda update bioconductor-cancer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cancer:<tag>

   (see `bioconductor-cancer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cancer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cancer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cancer
   :alt:   (downloads)
.. |docker_bioconductor-cancer| image:: https://quay.io/repository/biocontainers/bioconductor-cancer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cancer
.. _`bioconductor-cancer/tags`: https://quay.io/repository/biocontainers/bioconductor-cancer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cancer/README.html