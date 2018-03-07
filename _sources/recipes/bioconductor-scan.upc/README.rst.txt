.. _`bioconductor-scan.upc`:

bioconductor-scan.upc
=====================

|downloads|

SCAN is a microarray normalization method to facilitate personalized\-medicine workflows. Rather than processing microarray samples as groups\, which can introduce biases and present logistical challenges\, SCAN normalizes each sample individually by modeling and removing probe\- and array\-specific background noise using only data from within each array. SCAN can be applied to one\-channel \(e.g.\, Affymetrix\) or two\-channel \(e.g.\, Agilent\) microarrays. The Universal exPression Codes \(UPC\) method is an extension of SCAN that estimates whether a given gene\/transcript is active above background levels in a given sample. The UPC method can be applied to one\-channel or two\-channel microarrays as well as to RNA\-Seq read counts. Because UPC values are represented on the same scale and have an identical interpretation for each platform\, they can be used for cross\-platform data integration.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/SCAN.UPC.html
Versions      2.18.0, 2.20.0
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scan.upc



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-scan.upc

and update with::

   conda update bioconductor-scan.upc



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-scan.upc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-scan.upc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-scan.upc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-scan.upc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-scan.upc
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-scan.upc/status
                :target: https://quay.io/repository/biocontainers/bioconductor-scan.upc

