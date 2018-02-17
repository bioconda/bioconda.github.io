.. _`bioconductor-rarevariantvis`:

bioconductor-rarevariantvis
===========================

|downloads|

Second version of RareVariantVis package aims to provide comprehensive information about rare variants for your genome data. It annotates, filters and presents genomic variants (especially rare ones) in a global, per chromosome way. For discovered rare variants CRISPR guide RNAs are designed, so the user can plan further functional studies. Large structural variants, including copy number variants are also supported. Package accepts variants directly from variant caller - for example GATK or Speedseq. Output of package are lists of variants together with adequate visualization. Visualization of variants is performed in two ways - standard that outputs png figures and interactive that uses JavaScript d3 package. Interactive visualization allows to analyze trio/family data, for example in search for causative variants in rare Mendelian diseases, in point-and-click interface. The package includes homozygous region caller and allows to analyse whole human genomes in less than 30 minutes on a desktop computer. RareVariantVis disclosed novel causes of several rare monogenic disorders, including one with non-coding causative variant - keratolythic winter erythema.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/RareVariantVis.html
Versions 2.6.0
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rarevariantvis
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rarevariantvis

and update with::

   conda update bioconductor-rarevariantvis



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rarevariantvis.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rarevariantvis/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rarevariantvis/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rarevariantvis/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rarevariantvis
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rarevariantvis/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rarevariantvis


