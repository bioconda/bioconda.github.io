.. _`bioconductor-customprodb`:

bioconductor-customprodb
========================

|downloads|

Database search is the most widely used approach for peptide and protein identification in mass spectrometry\-based proteomics studies. Our previous study showed that sample\-specific protein databases derived from RNA\-Seq data can better approximate the real protein pools in the samples and thus improve protein identification. More importantly\, single nucleotide variations\, short insertion and deletions and novel junctions identified from RNA\-Seq data make protein database more complete and sample\-specific. Here\, we report an R package customProDB that enables the easy generation of customized databases from RNA\-Seq data for proteomics search. This work bridges genomics and proteomics studies and facilitates cross\-omics data integration.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/customProDB.html
Versions      1.14.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-customprodb/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-customprodb

and update with::

   conda update bioconductor-customprodb



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-customprodb.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-customprodb/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-customprodb/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-customprodb/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-customprodb
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-customprodb/status
                :target: https://quay.io/repository/biocontainers/bioconductor-customprodb

