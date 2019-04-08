:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pbcmc'
.. highlight: bash

bioconductor-pbcmc
==================

.. conda:recipe:: bioconductor-pbcmc
   :replaces_section_title:

   The pbcmc package characterizes uncertainty assessment on gene expression classifiers\, a. k. a. molecular signatures\, based on a permutation test. In order to achieve this goal\, synthetic simulated subjects are obtained by permutations of gene labels. Then\, each synthetic subject is tested against the corresponding subtype classifier to build the null distribution. Thus\, classification confidence measurement can be provided for each subject\, to assist physician therapy choice. At present\, it is only available for PAM50 implementation in genefu package but it can easily be extend to other molecular signatures.

   :homepage: http://bioconductor.org/packages/3.7/bioc/html/pbcmc.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-pbcmc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pbcmc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pbcmc/meta.yaml>`_
   :links: biotools: :biotools:`pbcmc`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-pbcmc

   |downloads_bioconductor-pbcmc| |docker_bioconductor-pbcmc|

   :versions: 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biobase: >=2.40.0,<2.42.0
   :depends bioconductor-biocgenerics: >=0.26.0,<0.28.0
   :depends bioconductor-biocparallel: >=1.14.2,<1.16.0
   :depends bioconductor-genefu: >=2.12.0,<2.14.0
   :depends bioconductor-limma: >=3.36.5,<3.38.0
   :depends r-base: >=3.4.1,<3.4.2.0a0
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pbcmc

   and update with::

      conda update bioconductor-pbcmc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pbcmc:<tag>

   (see `bioconductor-pbcmc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pbcmc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pbcmc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pbcmc| image:: https://quay.io/repository/biocontainers/bioconductor-pbcmc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pbcmc
.. _`bioconductor-pbcmc/tags`: https://quay.io/repository/biocontainers/bioconductor-pbcmc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pbcmc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pbcmc/README.html