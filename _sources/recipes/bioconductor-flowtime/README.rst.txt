.. _`bioconductor-flowtime`:

bioconductor-flowtime
=====================

|downloads|

This package was developed for analysis of both dynamic and steady state experiments examining the function of gene regulatory networks in yeast \(strain W303\) expressing fluorescent reporter proteins using a BD Accuri C6 and SORP cytometers. However\, the functions are for the most part general and may be adapted for analysis of other organisms using other flow cytometers. Functions in this package facilitate the annotation of flow cytometry data with experimental metadata\, as is requisite for dissemination and general ease\-of\-use. Functions for creating\, saving and loading gate sets are also included. In the past\, we have typically generated summary statistics for each flowset for each timepoint and then annotated and analyzed these summary statistics. This method loses a great deal of the power that comes from the large amounts of individual cell data generated in flow cytometry\, by essentially collapsing this data into a bulk measurement after subsetting. In addition to these summary functions\, this package also contains functions to facilitate annotation and analysis of steady\-state or time\-lapse data utilizing all of the data collected from the thousands of individual cells in each sample.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/flowTime.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-flowtime/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-flowtime

and update with::

   conda update bioconductor-flowtime



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-flowtime.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-flowtime/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-flowtime/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-flowtime/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-flowtime
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-flowtime/status
                :target: https://quay.io/repository/biocontainers/bioconductor-flowtime

