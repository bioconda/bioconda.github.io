:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biomm'
.. highlight: bash

bioconductor-biomm
==================

.. conda:recipe:: bioconductor-biomm
   :replaces_section_title:

   BioMM\: Biological\-informed Multi\-stage Machine learning framework for phenotype prediction using omics data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/BioMM.html
   :license: GPL-3
   :recipe: /`bioconductor-biomm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomm/meta.yaml>`_

   The identification of reproducible biological patterns from high\-dimensional omics data is a key factor in understanding the biology of complex disease or traits. Incorporating prior biological knowledge into machine learning is an important step in advancing such research. We have proposed a biologically informed multi\-stage machine learing framework termed BioMM specifically for phenotype prediction based on omics\-scale data where we can evaluate different machine learning models with prior biological meta information.


.. conda:package:: bioconductor-biomm

   |downloads_bioconductor-biomm| |docker_bioconductor-biomm|

   :versions: 1.4.0-0, 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-variancepartition: >=1.18.0,<1.19.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-cmplot: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-lattice: 
   :depends r-nsprcomp: 
   :depends r-proc: 
   :depends r-ranger: 
   :depends r-rms: 
   :depends r-vioplot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biomm

   and update with::

      conda update bioconductor-biomm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biomm:<tag>

   (see `bioconductor-biomm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biomm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biomm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biomm
   :alt:   (downloads)
.. |docker_bioconductor-biomm| image:: https://quay.io/repository/biocontainers/bioconductor-biomm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biomm
.. _`bioconductor-biomm/tags`: https://quay.io/repository/biocontainers/bioconductor-biomm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biomm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biomm/README.html