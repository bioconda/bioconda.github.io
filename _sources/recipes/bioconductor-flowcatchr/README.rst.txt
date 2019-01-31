.. _`bioconductor-flowcatchr`:

bioconductor-flowcatchr
=======================

|downloads|

flowcatchR is a set of tools to analyze in vivo microscopy imaging data\, focused on tracking flowing blood cells. It guides the steps from segmentation to calculation of features\, filtering out particles not of interest\, providing also a set of utilities to help checking the quality of the performed operations \(e.g. how good the segmentation was\). It allows investigating the issue of tracking flowing cells such as in blood vessels\, to categorize the particles in flowing\, rolling and adherent. This classification is applied in the study of phenomena such as hemostasis and study of thrombosis development. Moreover\, flowcatchR presents an integrated workflow solution\, based on the integration with a Shiny App and Jupyter notebooks\, which is delivered alongside the package\, and can enable fully reproducible bioimage analysis in the R environment.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/flowcatchR.html
Versions      
License       BSD_3_clause + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-flowcatchr/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-flowcatchr

and update with::

   conda update bioconductor-flowcatchr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-flowcatchr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-flowcatchr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-flowcatchr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-flowcatchr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-flowcatchr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-flowcatchr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-flowcatchr

