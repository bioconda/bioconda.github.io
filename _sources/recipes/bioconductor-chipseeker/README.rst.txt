.. title:: Package Recipe 'bioconductor-chipseeker'
.. highlight: bash


bioconductor-chipseeker
=======================

.. conda:recipe:: bioconductor-chipseeker
   :replaces_section_title:

   This package implements functions to retrieve the nearest genes around the peak\, annotate genomic region of the peak\, statstical methods for estimate the significance of overlap among ChIP peak data sets\, and incorporate GEO database for user to compare the own dataset with those deposited in database. The comparison can be used to infer cooperative regulation and thus can be used to generate hypotheses. Several visualization functions are implemented to summarize the coverage of the peak experiment\, average profile and heatmap of peaks binding to TSS regions\, genomic annotation\, distance to TSS\, and overlap of peaks or genes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ChIPseeker.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chipseeker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseeker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseeker/meta.yaml>`_
   :links: biotools: :biotools:`chipseeker`

   


.. conda:package:: bioconductor-chipseeker

   |downloads_bioconductor-chipseeker| |docker_bioconductor-chipseeker|

   :versions: 1.18.0, 1.16.1, 1.14.2, 1.14.0, 1.12.1, 1.10.0, 1.6.6

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-enrichplot` >=1.2.0,<1.3.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-txdb.hsapiens.ucsc.hg19.knowngene` >=3.2.0,<3.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-boot`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2` >=2.2.0 :conda:package:`r-gplots`  :conda:package:`r-gridbase`  :conda:package:`r-gtools`  :conda:package:`r-magrittr`  :conda:package:`r-plotrix`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-upsetr`  

   :required~by: |required_by_bioconductor-chipseeker|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipseeker

   and update with::

      conda update bioconductor-chipseeker

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chipseeker


.. |required_by_bioconductor-chipseeker| conda:required_by:: bioconductor-chipseeker
.. |downloads_bioconductor-chipseeker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipseeker.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chipseeker| image:: https://quay.io/repository/biocontainers/bioconductor-chipseeker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipseeker







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipseeker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipseeker/README.html

