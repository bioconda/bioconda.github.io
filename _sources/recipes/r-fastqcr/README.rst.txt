.. _`r-fastqcr`:

r-fastqcr
=========

|downloads|

\'FASTQC\' is the most widely used tool for evaluating the quality of high throughput sequencing data.   It produces\, for each sample\, an html report and a compressed file containing the raw data.  If you have hundreds of samples\, you are not going to open up each \'HTML\' page.  You need some way of looking at these data in aggregate.  \'fastqcr\' Provides helper functions to easily parse\, aggregate and analyze  \'FastQC\' reports for large numbers of samples. It provides a convenient solution for building  a \'Multi\-QC\' report\, as well as\, a \'one\-sample\' report with result interpretations.

============= ===========
Home          http://www.sthda.com/english/rpkgs/fastqcr/
Versions      0.1.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//r-fastqcr/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-fastqcr

and update with::

   conda update r-fastqcr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-fastqcr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-fastqcr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-fastqcr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-fastqcr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-fastqcr
.. |docker| image:: https://quay.io/repository/biocontainers/r-fastqcr/status
                :target: https://quay.io/repository/biocontainers/r-fastqcr

