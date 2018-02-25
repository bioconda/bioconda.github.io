.. _`bioconductor-mdqc`:

bioconductor-mdqc
=================

|downloads|

MDQC is a multivariate quality assessment method for microarrays based on quality control \(QC\) reports\. The Mahalanobis distance of an array\'s quality attributes is used to measure the similarity of the quality of that array against the quality of the other arrays\. Then\, arrays with unusually high distances can be flagged as potentially low\-quality\.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/mdqc.html
Versions      1.38.0, 1.40.0
License       LGPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdqc



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-mdqc

and update with::

   conda update bioconductor-mdqc



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-mdqc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-mdqc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-mdqc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-mdqc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-mdqc
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-mdqc/status
                :target: https://quay.io/repository/biocontainers/bioconductor-mdqc

