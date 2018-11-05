.. _`bioconductor-cosmiq`:

bioconductor-cosmiq
===================

|downloads|

cosmiq is a tool for the preprocessing of liquid\- or gas \- chromatography mass spectrometry \(LCMS\/GCMS\) data with a focus on metabolomics or lipidomics applications. To improve the detection of low abundant signals\, cosmiq generates master maps of the mZ\/RT space from all acquired runs before a peak detection algorithm is applied. The result is a more robust identification and quantification of low\-intensity MS signals compared to conventional approaches where peak picking is performed in each LCMS\/GCMS file separately. The cosmiq package builds on the xcmsSet object structure and can be therefore integrated well with the package xcms as an alternative preprocessing step.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/cosmiq.html
Versions      1.12.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmiq



Links         biotools: :biotools:`cosmiq`, doi: :doi:`10.5167/uzh-107947`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-cosmiq

and update with::

   conda update bioconductor-cosmiq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-cosmiq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-cosmiq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-cosmiq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-cosmiq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-cosmiq
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-cosmiq/status
                :target: https://quay.io/repository/biocontainers/bioconductor-cosmiq

