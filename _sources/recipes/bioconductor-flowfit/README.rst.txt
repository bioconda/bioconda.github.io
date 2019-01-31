.. _`bioconductor-flowfit`:

bioconductor-flowfit
====================

|downloads|

This package estimate the proliferation of a cell population in cell\-tracking dye studies. The package uses an R implementation of the Levenberg\-Marquardt algorithm \(minpack.lm\) to fit a set of peaks \(corresponding to different generations of cells\) over the proliferation\-tracking dye distribution in a FACS experiment.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/flowFit.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-flowfit/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-flowfit

and update with::

   conda update bioconductor-flowfit



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-flowfit.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-flowfit/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-flowfit/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-flowfit/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-flowfit
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-flowfit/status
                :target: https://quay.io/repository/biocontainers/bioconductor-flowfit

