:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sctgif'
.. highlight: bash

bioconductor-sctgif
===================

.. conda:recipe:: bioconductor-sctgif
   :replaces_section_title:
   :noindex:

   Cell type annotation for unannotated single\-cell RNA\-Seq data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/scTGIF.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sctgif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sctgif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sctgif/meta.yaml>`_

   scTGIF connects the cells and the related gene functions without cell type label.


.. conda:package:: bioconductor-sctgif

   |downloads_bioconductor-sctgif| |docker_bioconductor-sctgif|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-biocstyle: ``>=2.16.0,<2.17.0``
   :depends bioconductor-gseabase: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends bioconductor-singlecellexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-knitr: 
   :depends r-msigdbr: 
   :depends r-nntensor: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-tagcloud: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sctgif

   and update with::

      conda update bioconductor-sctgif

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sctgif:<tag>

   (see `bioconductor-sctgif/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sctgif| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sctgif.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sctgif
   :alt:   (downloads)
.. |docker_bioconductor-sctgif| image:: https://quay.io/repository/biocontainers/bioconductor-sctgif/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sctgif
.. _`bioconductor-sctgif/tags`: https://quay.io/repository/biocontainers/bioconductor-sctgif?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sctgif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sctgif/README.html