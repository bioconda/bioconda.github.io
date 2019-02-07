.. title:: Package Recipe 'bioconductor-scruff'
.. highlight: bash


bioconductor-scruff
===================

.. conda:recipe:: bioconductor-scruff
   :replaces_section_title:

   A pipeline which processes single cell RNA\-seq \(scRNA\-seq\) reads from CEL\-seq and CEL\-seq2 protocols. Demultiplex scRNA\-seq FASTQ files\, align reads to reference genome using Rsubread\, and generate UMI filtered count matrix. Also provide visualizations of read alignments and pre\- and post\-alignment QC metrics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/scruff.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scruff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scruff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scruff/meta.yaml>`_

   


.. conda:package:: bioconductor-scruff

   |downloads_bioconductor-scruff| |docker_bioconductor-scruff|

   :versions: 1.0.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-ggbio` >=1.30.0,<1.31.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-ggthemes`  :conda:package:`r-plyr`  :conda:package:`r-refgenome`  :conda:package:`r-scales`  :conda:package:`r-stringdist`  

   :required~by: |required_by_bioconductor-scruff|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scruff

   and update with::

      conda update bioconductor-scruff

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scruff


.. |required_by_bioconductor-scruff| conda:required_by:: bioconductor-scruff
.. |downloads_bioconductor-scruff| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scruff.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scruff| image:: https://quay.io/repository/biocontainers/bioconductor-scruff/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scruff







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scruff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scruff/README.html

