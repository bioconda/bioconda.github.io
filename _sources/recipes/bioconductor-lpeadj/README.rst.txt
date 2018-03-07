.. _`bioconductor-lpeadj`:

bioconductor-lpeadj
===================

|downloads|

Two options are added to the LPE algorithm. The original LPE method sets all variances below the max variance in the ordered distribution of variances to the maximum variance. in LPEadj this option is turned off by default.  The second option is to use a variance adjustment based on sample size rather than pi\/2.  By default the LPEadj uses the sample size based variance adjustment.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/LPEadj.html
Versions      1.38.0
License       LGPL
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpeadj



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-lpeadj

and update with::

   conda update bioconductor-lpeadj



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-lpeadj.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-lpeadj/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-lpeadj/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-lpeadj/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-lpeadj
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-lpeadj/status
                :target: https://quay.io/repository/biocontainers/bioconductor-lpeadj

