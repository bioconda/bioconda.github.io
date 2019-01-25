.. _`bioconductor-esatac`:

bioconductor-esatac
===================

|downloads|

This package provides a framework and complete preset pipeline for quantification and analysis of ATAC\-seq Reads. It covers raw sequencing reads preprocessing \(FASTQ files\)\, reads alignment \(Rbowtie2\)\, aligned reads file operations \(SAM\, BAM\, and BED files\)\, peak calling \(F\-seq\)\, genome annotations \(Motif\, GO\, SNP analysis\) and quality control report. The package is managed by dataflow graph. It is easy for user to pass variables seamlessly between processes and understand the workflow. Users can process FASTQ files through end\-to\-end preset pipeline which produces a pretty HTML report for quality control and preliminary statistical results\, or customize workflow starting from any intermediate stages with esATAC functions easily and flexibly.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/esATAC.html
Versions      
License       GPL-3 | file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-esatac/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-esatac

and update with::

   conda update bioconductor-esatac



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-esatac.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-esatac/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-esatac/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-esatac/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-esatac
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-esatac/status
                :target: https://quay.io/repository/biocontainers/bioconductor-esatac

