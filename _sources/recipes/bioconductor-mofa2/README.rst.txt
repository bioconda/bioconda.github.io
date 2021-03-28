:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mofa2'
.. highlight: bash

bioconductor-mofa2
==================

.. conda:recipe:: bioconductor-mofa2
   :replaces_section_title:
   :noindex:

   Multi\-Omics Factor Analysis v2

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/MOFA2.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mofa2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mofa2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mofa2/meta.yaml>`_

   The MOFA2 package contains a collection of tools for running and analysing MOFA models.


.. conda:package:: bioconductor-mofa2

   |downloads_bioconductor-mofa2| |docker_bioconductor-mofa2|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-basilisk: ``>=1.2.0,<1.3.0``
   :depends bioconductor-delayedarray: ``>=0.16.0,<0.17.0``
   :depends bioconductor-hdf5array: ``>=1.18.0,<1.19.0``
   :depends bioconductor-rhdf5: ``>=2.34.0,<2.35.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-corrplot: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-magrittr: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-reticulate: 
   :depends r-rtsne: 
   :depends r-tidyr: 
   :depends r-uwot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mofa2

   and update with::

      conda update bioconductor-mofa2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mofa2:<tag>

   (see `bioconductor-mofa2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mofa2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mofa2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mofa2
   :alt:   (downloads)
.. |docker_bioconductor-mofa2| image:: https://quay.io/repository/biocontainers/bioconductor-mofa2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mofa2
.. _`bioconductor-mofa2/tags`: https://quay.io/repository/biocontainers/bioconductor-mofa2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mofa2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mofa2/README.html