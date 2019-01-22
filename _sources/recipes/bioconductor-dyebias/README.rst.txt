.. _`bioconductor-dyebias`:

bioconductor-dyebias
====================

|downloads|

Many two\-colour hybridizations suffer from a dye bias that is both gene\-specific and slide\-specific. The former depends on the content of the nucleotide used for labeling\; the latter depends on the labeling percentage. The slide\-dependency was hitherto not recognized\, and made addressing the artefact impossible.  Given a reasonable number of dye\-swapped pairs of hybridizations\, or of same vs. same hybridizations\, both the gene\- and slide\-biases can be estimated and corrected using the GASSCO method \(Margaritis et al.\, Mol. Sys. Biol. 5\:266 \(2009\)\, doi\:10.1038\/msb.2009.21\)

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/dyebias.html
Versions      1.40.0, 1.38.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyebias



Links         biotools: :biotools:`dyebias`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-dyebias

and update with::

   conda update bioconductor-dyebias



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-dyebias.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-dyebias/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-dyebias/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-dyebias/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-dyebias
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-dyebias/status
                :target: https://quay.io/repository/biocontainers/bioconductor-dyebias

