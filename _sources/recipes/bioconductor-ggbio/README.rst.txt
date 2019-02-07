.. title:: Package Recipe 'bioconductor-ggbio'
.. highlight: bash


bioconductor-ggbio
==================

.. conda:recipe:: bioconductor-ggbio
   :replaces_section_title:

   The ggbio package extends and specializes the grammar of graphics for biological data. The graphics are designed to answer common scientific questions\, in particular those often asked of high throughput genomics data. All core Bioconductor data structures are supported\, where appropriate. The package supports detailed views of particular genomic regions\, as well as genome\-wide overviews. Supported overviews include ideograms and grand linear views. High\-level plots include sequence fragment length\, edge\-linked interval to data view\, mismatch pileup\, and several splicing summaries.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ggbio.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggbio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggbio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggbio/meta.yaml>`_
   :links: biotools: :biotools:`ggbio`

   


.. conda:package:: bioconductor-ggbio

   |downloads_bioconductor-ggbio| |docker_bioconductor-ggbio|

   :versions: 1.30.0, 1.28.5, 1.26.0, 1.24.1, 1.22.0, 1.20.2, 1.18.5, 1.18.1, 1.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-annotationfilter` >=1.6.0,<1.7.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-biovizbase` >=1.30.0,<1.31.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-ensembldb` >=2.6.0,<2.7.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-organismdbi` >=1.24.0,<1.25.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggally`  :conda:package:`r-ggplot2` >=1.0.0 :conda:package:`r-gridextra`  :conda:package:`r-gtable`  :conda:package:`r-hmisc`  :conda:package:`r-reshape2`  :conda:package:`r-rlang`  :conda:package:`r-scales`  

   :required~by: |required_by_bioconductor-ggbio|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ggbio

   and update with::

      conda update bioconductor-ggbio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ggbio


.. |required_by_bioconductor-ggbio| conda:required_by:: bioconductor-ggbio
.. |downloads_bioconductor-ggbio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggbio.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ggbio| image:: https://quay.io/repository/biocontainers/bioconductor-ggbio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggbio







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggbio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggbio/README.html

