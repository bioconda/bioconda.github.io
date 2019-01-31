.. _`bioconductor-genextender`:

bioconductor-genextender
========================

|downloads|

geneXtendeR optimizes the functional annotation of ChIP\-seq peaks by exploring relative differences in annotating ChIP\-seq peak sets to variable\-length gene bodies.  In contrast to prior techniques\, geneXtendeR considers peak annotations beyond just the closest gene\, allowing users to see peak summary statistics for the first\-closest gene\, second\-closest gene\, ...\, n\-closest gene whilst ranking the output according to biologically relevant events and iteratively comparing the fidelity of peak\-to\-gene overlap across a user\-defined range of upstream and downstream extensions on the original boundaries of each gene\'s coordinates.  Since different ChIP\-seq peak callers produce different differentially enriched peaks with a large variance in peak length distribution and total peak count\, annotating peak lists with their nearest genes can often be a noisy process.  As such\, the goal of geneXtendeR is to robustly link differentially enriched peaks with their respective genes\, thereby aiding experimental follow\-up and validation in designing primers for a set of prospective gene candidates during qPCR.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/geneXtendeR.html
Versions      
License       GPL (>= 3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-genextender/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-genextender

and update with::

   conda update bioconductor-genextender



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-genextender.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-genextender/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-genextender/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-genextender/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-genextender
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-genextender/status
                :target: https://quay.io/repository/biocontainers/bioconductor-genextender

