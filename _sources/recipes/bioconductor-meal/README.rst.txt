:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meal'
.. highlight: bash

bioconductor-meal
=================

.. conda:recipe:: bioconductor-meal
   :replaces_section_title:
   :noindex:

   Perform methylation analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MEAL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-meal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meal/meta.yaml>`_

   Package to integrate methylation and expression data. It can also perform methylation or expression analysis alone. Several plotting functionalities are included as well as a new region analysis based on redundancy analysis. Effect of SNPs on a region can also be estimated.


.. conda:package:: bioconductor-meal

   |downloads_bioconductor-meal| |docker_bioconductor-meal|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.15.0-0``,  ``1.14.0-1``,  ``1.12.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-gviz: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-minfi: ``>=1.36.0,<1.37.0``
   :depends bioconductor-missmethyl: ``>=1.24.0,<1.25.0``
   :depends bioconductor-multidataset: ``>=1.18.0,<1.19.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: ``>=2.0.0``
   :depends r-isva: 
   :depends r-matrixstats: 
   :depends r-permute: 
   :depends r-smartsva: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-meal

   and update with::

      conda update bioconductor-meal

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-meal:<tag>

   (see `bioconductor-meal/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-meal| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meal.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meal
   :alt:   (downloads)
.. |docker_bioconductor-meal| image:: https://quay.io/repository/biocontainers/bioconductor-meal/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meal
.. _`bioconductor-meal/tags`: https://quay.io/repository/biocontainers/bioconductor-meal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meal/README.html