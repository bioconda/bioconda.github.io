:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gqtlstats'
.. highlight: bash

bioconductor-gqtlstats
======================

.. conda:recipe:: bioconductor-gqtlstats
   :replaces_section_title:
   :noindex:

   gQTLstats\: computationally efficient analysis for eQTL and allied studies

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/gQTLstats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gqtlstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gqtlstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gqtlstats/meta.yaml>`_

   computationally efficient analysis of eQTL\, mQTL\, dsQTL\, etc.


.. conda:package:: bioconductor-gqtlstats

   |downloads_bioconductor-gqtlstats| |docker_bioconductor-gqtlstats|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.50.0,<1.51.0``
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-erma: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicfeatures: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomicfiles: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-gqtlbase: ``>=1.20.0,<1.21.0``
   :depends bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-limma: ``>=3.44.0,<3.45.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends bioconductor-snpstats: ``>=1.38.0,<1.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends bioconductor-variantannotation: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
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