:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enrichplot'
.. highlight: bash

bioconductor-enrichplot
=======================

.. conda:recipe:: bioconductor-enrichplot
   :replaces_section_title:

   The \'enrichplot\' package implements several visualization methods for interpreting functional enrichment results obtained from ORA or GSEA analysis. All the visualization methods are developed based on \'ggplot2\' graphics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/enrichplot.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-enrichplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichplot/meta.yaml>`_

   


.. conda:package:: bioconductor-enrichplot

   |downloads_bioconductor-enrichplot| |docker_bioconductor-enrichplot|

   :versions: 1.2.0-0, 1.0.2-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-dose: >=3.8.0,<3.9.0
   
   :depends bioconductor-gosemsim: >=2.8.0,<2.9.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-cowplot: 
   
   :depends r-europepmc: 
   
   :depends r-ggplot2: 
   
   :depends r-ggplotify: 
   
   :depends r-ggraph: 
   
   :depends r-ggridges: 
   
   :depends r-gridextra: 
   
   :depends r-igraph: 
   
   :depends r-purrr: 
   
   :depends r-rcolorbrewer: 
   
   :depends r-reshape2: 
   
   :depends r-upsetr: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-enrichplot

   and update with::

      conda update bioconductor-enrichplot

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enrichplot:<tag>

   (see `bioconductor-enrichplot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enrichplot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enrichplot.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-enrichplot| image:: https://quay.io/repository/biocontainers/bioconductor-enrichplot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enrichplot
.. _`bioconductor-enrichplot/tags`: https://quay.io/repository/biocontainers/bioconductor-enrichplot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enrichplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enrichplot/README.html