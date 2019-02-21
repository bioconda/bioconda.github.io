:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-semisup'
.. highlight: bash

bioconductor-semisup
====================

.. conda:recipe:: bioconductor-semisup
   :replaces_section_title:

   Useful for detecting SNPs with interactive effects on a quantitative trait. This R packages moves away from testing interaction terms\, and moves towards testing whether an individual SNP is involved in any interaction. This reduces the multiple testing burden to one test per SNP\, and allows for interactions with unobserved factors. Analysing one SNP at a time\, it splits the individuals into two groups\, based on the number of minor alleles. If the quantitative trait differs in mean between the two groups\, the SNP has a main effect. If the quantitative trait differs in distribution between some individuals in one group and all other individuals\, it possibly has an interactive effect. Implicitly\, the membership probabilities may suggest potential interacting variables.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/semisup.html
   :license: GPL-3
   :recipe: /`bioconductor-semisup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-semisup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-semisup/meta.yaml>`_

   


.. conda:package:: bioconductor-semisup

   |downloads_bioconductor-semisup| |docker_bioconductor-semisup|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-0, 1.0.2-0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-vgam: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-semisup

   and update with::

      conda update bioconductor-semisup

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-semisup:<tag>

   (see `bioconductor-semisup/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-semisup| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-semisup.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-semisup| image:: https://quay.io/repository/biocontainers/bioconductor-semisup/status
   :target: https://quay.io/repository/biocontainers/bioconductor-semisup
.. _`bioconductor-semisup/tags`: https://quay.io/repository/biocontainers/bioconductor-semisup?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-semisup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-semisup/README.html