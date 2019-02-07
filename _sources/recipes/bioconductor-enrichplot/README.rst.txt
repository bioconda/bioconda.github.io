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

   :versions: 1.2.0, 1.0.2

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-dose` >=3.8.0,<3.9.0 :conda:package:`bioconductor-gosemsim` >=2.8.0,<2.9.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cowplot`  :conda:package:`r-europepmc`  :conda:package:`r-ggplot2`  :conda:package:`r-ggplotify`  :conda:package:`r-ggraph`  :conda:package:`r-ggridges`  :conda:package:`r-gridextra`  :conda:package:`r-igraph`  :conda:package:`r-purrr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-upsetr`  

   :required~by: |required_by_bioconductor-enrichplot|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-enrichplot

   and update with::

      conda update bioconductor-enrichplot

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-enrichplot


.. |required_by_bioconductor-enrichplot| conda:required_by:: bioconductor-enrichplot
.. |downloads_bioconductor-enrichplot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enrichplot.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-enrichplot| image:: https://quay.io/repository/biocontainers/bioconductor-enrichplot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enrichplot







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enrichplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enrichplot/README.html

