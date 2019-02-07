.. title:: Package Recipe 'bioconductor-derfinderplot'
.. highlight: bash


bioconductor-derfinderplot
==========================

.. conda:recipe:: bioconductor-derfinderplot
   :replaces_section_title:

   This package provides plotting functions for results from the derfinder package.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/derfinderPlot.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-derfinderplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinderplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinderplot/meta.yaml>`_
   :links: biotools: :biotools:`derfinderplot`

   


.. conda:package:: bioconductor-derfinderplot

   |downloads_bioconductor-derfinderplot| |docker_bioconductor-derfinderplot|

   :versions: 1.16.1, 1.14.0, 1.12.0

   :depends: :conda:package:`bioconductor-derfinder` >=1.16.0,<1.17.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-ggbio` >=1.30.0,<1.31.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-plyr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-refmanager`  :conda:package:`r-reshape2`  :conda:package:`r-scales`  

   :required~by: |required_by_bioconductor-derfinderplot|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-derfinderplot

   and update with::

      conda update bioconductor-derfinderplot

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-derfinderplot


.. |required_by_bioconductor-derfinderplot| conda:required_by:: bioconductor-derfinderplot
.. |downloads_bioconductor-derfinderplot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-derfinderplot.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-derfinderplot| image:: https://quay.io/repository/biocontainers/bioconductor-derfinderplot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-derfinderplot







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-derfinderplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-derfinderplot/README.html

