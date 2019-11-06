:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gqtlstats'
.. highlight: bash

bioconductor-gqtlstats
======================

.. conda:recipe:: bioconductor-gqtlstats
   :replaces_section_title:

   computationally efficient analysis of eQTL\, mQTL\, dsQTL\, etc.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/gQTLstats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gqtlstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gqtlstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gqtlstats/meta.yaml>`_

   


.. conda:package:: bioconductor-gqtlstats

   |downloads_bioconductor-gqtlstats| |docker_bioconductor-gqtlstats|

   :versions: 1.18.0-0, 1.16.0-1, 1.14.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-erma: >=1.2.0,<1.3.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicfeatures: >=1.38.0,<1.39.0
   :depends bioconductor-genomicfiles: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-gqtlbase: >=1.18.0,<1.19.0
   :depends bioconductor-homo.sapiens: >=1.3.0,<1.4.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-snpstats: >=1.36.0,<1.37.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends bioconductor-variantannotation: >=1.32.0,<1.33.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-batchjobs: 
   :depends r-bbmisc: 
   :depends r-beeswarm: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-ffbase: 
   :depends r-foreach: 
   :depends r-ggbeeswarm: 
   :depends r-ggplot2: 
   :depends r-hardyweinberg: 
   :depends r-mgcv: 
   :depends r-plotly: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gqtlstats

   and update with::

      conda update bioconductor-gqtlstats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gqtlstats:<tag>

   (see `bioconductor-gqtlstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gqtlstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gqtlstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gqtlstats
   :alt:   (downloads)
.. |docker_bioconductor-gqtlstats| image:: https://quay.io/repository/biocontainers/bioconductor-gqtlstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gqtlstats
.. _`bioconductor-gqtlstats/tags`: https://quay.io/repository/biocontainers/bioconductor-gqtlstats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gqtlstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gqtlstats/README.html