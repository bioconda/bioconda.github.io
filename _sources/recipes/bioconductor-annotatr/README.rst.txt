.. title:: Package Recipe 'bioconductor-annotatr'
.. highlight: bash


bioconductor-annotatr
=====================

.. conda:recipe:: bioconductor-annotatr
   :replaces_section_title:

   Given a set of genomic sites\/regions \(e.g. ChIP\-seq peaks\, CpGs\, differentially methylated CpGs or regions\, SNPs\, etc.\) it is often of interest to investigate the intersecting genomic annotations. Such annotations include those relating to gene models \(promoters\, 5\'UTRs\, exons\, introns\, and 3\'UTRs\)\, CpGs \(CpG islands\, CpG shores\, CpG shelves\)\, or regulatory sequences such as enhancers. The annotatr package provides an easy way to summarize and visualize the intersection of genomic sites\/regions with genomic annotations.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/annotatr.html
   :license: GPL-3
   :recipe: /`bioconductor-annotatr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotatr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotatr/meta.yaml>`_

   


.. conda:package:: bioconductor-annotatr

   |downloads_bioconductor-annotatr| |docker_bioconductor-annotatr|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-annotationhub` >=2.14.0,<2.15.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-regioner` >=1.14.0,<1.15.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-readr`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-annotatr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annotatr

   and update with::

      conda update bioconductor-annotatr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-annotatr


.. |required_by_bioconductor-annotatr| conda:required_by:: bioconductor-annotatr
.. |downloads_bioconductor-annotatr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotatr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-annotatr| image:: https://quay.io/repository/biocontainers/bioconductor-annotatr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotatr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotatr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotatr/README.html

