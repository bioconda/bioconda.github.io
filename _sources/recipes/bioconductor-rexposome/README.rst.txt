:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rexposome'
.. highlight: bash

bioconductor-rexposome
======================

.. conda:recipe:: bioconductor-rexposome
   :replaces_section_title:
   :noindex:

   Exposome exploration and outcome data analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/rexposome.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rexposome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rexposome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rexposome/meta.yaml>`_

   Package that allows to explore the exposome and to perform association analyses between exposures and health outcomes.


.. conda:package:: bioconductor-rexposome

   |downloads_bioconductor-rexposome| |docker_bioconductor-rexposome|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.4-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: 
   :depends r-corrplot: 
   :depends r-factominer: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-glmnet: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-gtools: 
   :depends r-hmisc: 
   :depends r-imputelcmd: 
   :depends r-lme4: 
   :depends r-lsr: 
   :depends r-mice: 
   :depends r-pryr: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-scatterplot3d: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rexposome

   and update with::

      conda update bioconductor-rexposome

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rexposome:<tag>

   (see `bioconductor-rexposome/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rexposome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rexposome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rexposome
   :alt:   (downloads)
.. |docker_bioconductor-rexposome| image:: https://quay.io/repository/biocontainers/bioconductor-rexposome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rexposome
.. _`bioconductor-rexposome/tags`: https://quay.io/repository/biocontainers/bioconductor-rexposome?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rexposome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rexposome/README.html