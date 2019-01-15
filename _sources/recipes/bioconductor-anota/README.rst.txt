.. _`bioconductor-anota`:

bioconductor-anota
==================

|downloads|

Genome wide studies of translational control is emerging as a tool to study verious biological conditions. The output from such analysis is both the mRNA level \(e.g. cytosolic mRNA level\) and the levl of mRNA actively involved in translation \(the actively translating mRNA level\) for each mRNA. The standard analysis of such data strives towards identifying differential translational between two or more sample classes \- i.e. differences in actively translated mRNA levels that are independent of underlying differences in cytosolic mRNA levels. This package allows for such analysis using partial variances and the random variance model. As 10s of thousands of mRNAs are analyzed in parallell the library performs a number of tests to assure that the data set is suitable for such analysis.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/anota.html
Versions      1.28.0, 1.26.0, 1.24.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anota



Links         biotools: :biotools:`anota`, doi: :doi:`10.1093/bioinformatics/btr146`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-anota

and update with::

   conda update bioconductor-anota



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-anota.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-anota/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-anota/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-anota/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-anota
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-anota/status
                :target: https://quay.io/repository/biocontainers/bioconductor-anota

