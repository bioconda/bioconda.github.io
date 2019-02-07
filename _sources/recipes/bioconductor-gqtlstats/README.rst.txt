.. title:: Package Recipe 'bioconductor-gqtlstats'
.. highlight: bash


bioconductor-gqtlstats
======================

.. conda:recipe:: bioconductor-gqtlstats
   :replaces_section_title:

   computationally efficient analysis of eQTL\, mQTL\, dsQTL\, etc.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/gQTLstats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gqtlstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gqtlstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gqtlstats/meta.yaml>`_

   


.. conda:package:: bioconductor-gqtlstats

   |downloads_bioconductor-gqtlstats| |docker_bioconductor-gqtlstats|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-erma` >=0.14.0,<0.15.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicfiles` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gqtlbase` >=1.14.0,<1.15.0 :conda:package:`bioconductor-homo.sapiens` >=1.3.0,<1.4.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-snpstats` >=1.32.0,<1.33.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-batchjobs`  :conda:package:`r-bbmisc`  :conda:package:`r-beeswarm`  :conda:package:`r-doparallel`  :conda:package:`r-dplyr`  :conda:package:`r-ffbase`  :conda:package:`r-foreach`  :conda:package:`r-ggbeeswarm`  :conda:package:`r-ggplot2`  :conda:package:`r-hardyweinberg`  :conda:package:`r-mgcv`  :conda:package:`r-plotly`  :conda:package:`r-reshape2`  :conda:package:`r-shiny`  

   :required~by: |required_by_bioconductor-gqtlstats|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gqtlstats

   and update with::

      conda update bioconductor-gqtlstats

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gqtlstats


.. |required_by_bioconductor-gqtlstats| conda:required_by:: bioconductor-gqtlstats
.. |downloads_bioconductor-gqtlstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gqtlstats.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gqtlstats| image:: https://quay.io/repository/biocontainers/bioconductor-gqtlstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gqtlstats







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gqtlstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gqtlstats/README.html

