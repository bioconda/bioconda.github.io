.. _`bioconductor-dada2`:

bioconductor-dada2
==================

|downloads|

The dada2 package provides "OTU picking" functionality, but instead of picking OTUs the DADA2 algorithm exactly infers samples sequences. The dada2 pipeline starts from demultiplexed fastq files, and outputs inferred sample sequences and associated abundances after removing substitution and chimeric errors. Taxonomic classification is also available via a native implementation of the RDP classifier method.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/dada2.html
Versions 0.10.0, 0.10.1, 0.10.3, 0.10.4, 0.99.10, 1.0.3, 1.2
License  LGPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dada2
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-dada2

and update with::

   conda update bioconductor-dada2



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-dada2.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-dada2/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-dada2/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-dada2/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-dada2
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-dada2/status
                :target: https://quay.io/repository/biocontainers/bioconductor-dada2


