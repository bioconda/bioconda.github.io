.. _`bioconductor-systempiper`:

bioconductor-systempiper
========================

|downloads|

R package for building and running automated end-to-end analysis workflows for a wide range of next generation sequence (NGS) applications such as RNA-Seq, ChIP-Seq, VAR-Seq and Ribo-Seq. Important features include a uniform workflow interface across different NGS applications, automated report generation, and support for running both R and command-line software, such as NGS aligners or peak/variant callers, on local computers or compute clusters. Efficient handling of complex sample sets and experimental designs is facilitated by a consistently implemented sample annotation infrastructure. Instructions for using systemPipeR are given in the Overview Vignette (HTML). The remaining Vignettes, linked below, are workflow templates for common NGS use cases.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/systemPipeR.html
Versions 1.4.7, 1.4.8
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempiper
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-systempiper

and update with::

   conda update bioconductor-systempiper



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-systempiper.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-systempiper/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-systempiper/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-systempiper/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-systempiper
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-systempiper/status
                :target: https://quay.io/repository/biocontainers/bioconductor-systempiper


