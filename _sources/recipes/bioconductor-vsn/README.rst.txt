.. _`bioconductor-vsn`:

bioconductor-vsn
================

|downloads|

The package implements a method for normalising microarray intensities\, and works for single\- and multiple\-color arrays. It can also be used for data from other technologies\, as long as they have similar format. The method uses a robust variant of the maximum\-likelihood estimator for an additive\-multiplicative error model and affine calibration. The model incorporates data calibration step \(a.k.a. normalization\)\, a model for the dependence of the variance on the mean intensity and a variance stabilizing data transformation. Differences between transformed intensities are analogous to \"normalized log\-ratios\". However\, in contrast to the latter\, their variance is independent of the mean\, and they are usually more sensitive and specific in detecting differential transcription.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/vsn.html
Versions      3.48.1, 3.46.0, 3.44.0, 3.38.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vsn



Links         biotools: :biotools:`vsn`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-vsn

and update with::

   conda update bioconductor-vsn



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-vsn.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-vsn/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-vsn/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-vsn/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-vsn
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-vsn/status
                :target: https://quay.io/repository/biocontainers/bioconductor-vsn

