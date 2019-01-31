.. _`bioconductor-geneattribution`:

bioconductor-geneattribution
============================

|downloads|

Identification of the most likely gene or genes through which variation at a given genomic locus in the human genome acts. The most basic functionality assumes that the closer gene is to the input locus\, the more likely the gene is to be causative. Additionally\, any empirical data that links genomic regions to genes \(e.g. eQTL or genome conformation data\) can be used if it is supplied in the UCSC .BED file format.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/geneAttribution.html
Versions      1.6.0, 1.4.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-geneattribution/meta.yaml



Links         biotools: :biotools:`geneattribution`, doi: :doi:`10.1093/bioinformatics/btw698`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-geneattribution

and update with::

   conda update bioconductor-geneattribution



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-geneattribution.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-geneattribution/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-geneattribution/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-geneattribution/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-geneattribution
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-geneattribution/status
                :target: https://quay.io/repository/biocontainers/bioconductor-geneattribution

