.. _`bioconductor-lobstahs`:

bioconductor-lobstahs
=====================

|downloads|

LOBSTAHS is a multifunction package for screening\, annotation\, and putative identification of mass spectral features in large\, HPLC\-MS lipid datasets. In silico data for a wide range of lipids\, oxidized lipids\, and oxylipins can be generated from user\-supplied structural criteria with a database generation function. LOBSTAHS then applies these databases to assign putative compound identities to features in any high\-mass accuracy dataset that has been processed using xcms and CAMERA. Users can then apply a series of orthogonal screening criteria based on adduct ion formation patterns\, chromatographic retention time\, and other properties\, to evaluate and assign confidence scores to this list of preliminary assignments. During the screening routine\, LOBSTAHS rejects assignments that do not meet the specified criteria\, identifies potential isomers and isobars\, and assigns a variety of annotation codes to assist the user in evaluating the accuracy of each assignment.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/LOBSTAHS.html
Versions      1.4.0
License       GPL (>= 3) + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-lobstahs/meta.yaml



Links         biotools: :biotools:`lobstahs`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-lobstahs

and update with::

   conda update bioconductor-lobstahs



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-lobstahs.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-lobstahs/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-lobstahs/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-lobstahs/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-lobstahs
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-lobstahs/status
                :target: https://quay.io/repository/biocontainers/bioconductor-lobstahs

