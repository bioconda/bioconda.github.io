.. _`r-canopy`:

r-canopy
========

|downloads|

A statistical framework and computational procedure for identifying the sub\-populations within a tumor\, determining the mutation profiles of each  subpopulation\, and inferring the tumor\'s phylogenetic history\. The input are  variant allele frequencies \(VAFs\) of somatic single nucleotide alterations  \(SNAs\) along with allele\-specific coverage ratios between the tumor and matched normal sample for somatic copy number alterations \(CNAs\)\. These quantities can be directly taken from the output of existing software\. Canopy provides a  general mathematical framework for pooling data across samples and sites to  infer the underlying parameters\. For SNAs that fall within CNA regions\, Canopy infers their temporal ordering and resolves their phase\.  When there are  multiple evolutionary configurations consistent with the data\, Canopy outputs  all configurations along with their confidence assessment\.

============= ===========
Home          https://cran.r-project.org/web/packages/Canopy/index.html
Versions      1.2.0, 1.3.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-canopy



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-canopy

and update with::

   conda update r-canopy



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-canopy.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-canopy/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-canopy/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-canopy/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-canopy
.. |docker| image:: https://quay.io/repository/biocontainers/r-canopy/status
                :target: https://quay.io/repository/biocontainers/r-canopy

