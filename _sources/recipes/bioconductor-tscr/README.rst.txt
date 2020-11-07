:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tscr'
.. highlight: bash

bioconductor-tscr
=================

.. conda:recipe:: bioconductor-tscr
   :replaces_section_title:
   :noindex:

   A time series clustering package combining slope and Frechet distances

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/tscR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-tscr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tscr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tscr/meta.yaml>`_

   Clustering for time series data using slope distance and\/or shape distance.


.. conda:package:: bioconductor-tscr

   |downloads_bioconductor-tscr| |docker_bioconductor-tscr|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-class: 
   :depends r-cluster: 
   :depends r-dplyr: 
   :depends r-dtw: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-kmlshape: 
   :depends r-knitr: 
   :depends r-latex2exp: 
   :depends r-prettydoc: 
   :depends r-rcolorbrewer: 
   :depends r-rmarkdown: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tscr

   and update with::

      conda update bioconductor-tscr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tscr:<tag>

   (see `bioconductor-tscr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tscr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tscr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tscr
   :alt:   (downloads)
.. |docker_bioconductor-tscr| image:: https://quay.io/repository/biocontainers/bioconductor-tscr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tscr
.. _`bioconductor-tscr/tags`: https://quay.io/repository/biocontainers/bioconductor-tscr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tscr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tscr/README.html