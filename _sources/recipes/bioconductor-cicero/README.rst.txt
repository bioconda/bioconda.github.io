:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cicero'
.. highlight: bash

bioconductor-cicero
===================

.. conda:recipe:: bioconductor-cicero
   :replaces_section_title:
   :noindex:

   Precict cis\-co\-accessibility from single\-cell chromatin accessibility data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/cicero.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cicero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cicero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cicero/meta.yaml>`_

   Cicero computes putative cis\-regulatory maps from single\-cell chromatin accessibility data. It also extends monocle 2 for use in chromatin accessibility data.


.. conda:package:: bioconductor-cicero

   |downloads_bioconductor-cicero| |docker_bioconductor-cicero|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.14-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-gviz: ``>=1.36.0,<1.37.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-monocle: ``>=2.20.0,<2.21.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-assertthat: ``>=0.2.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: ``>=1.10.4``
   :depends r-dplyr: ``>=0.7.4``
   :depends r-fnn: ``>=1.1``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-glasso: ``>=1.8``
   :depends r-igraph: ``>=1.1.0``
   :depends r-matrix: ``>=1.2-12``
   :depends r-plyr: ``>=1.8.4``
   :depends r-reshape2: ``>=1.4.3``
   :depends r-stringi: 
   :depends r-stringr: ``>=1.2.0``
   :depends r-tibble: ``>=1.4.2``
   :depends r-tidyr: 
   :depends r-vgam: ``>=1.0-5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cicero

   and update with::

      conda update bioconductor-cicero

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cicero:<tag>

   (see `bioconductor-cicero/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cicero| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cicero.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cicero
   :alt:   (downloads)
.. |docker_bioconductor-cicero| image:: https://quay.io/repository/biocontainers/bioconductor-cicero/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cicero
.. _`bioconductor-cicero/tags`: https://quay.io/repository/biocontainers/bioconductor-cicero?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cicero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cicero/README.html