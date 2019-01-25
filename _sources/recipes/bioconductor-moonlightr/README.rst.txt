.. _`bioconductor-moonlightr`:

bioconductor-moonlightr
=======================

|downloads|

Motivation\: The understanding of cancer mechanism requires the identification of genes playing a role in the development of the pathology and the characterization of their role \(notably oncogenes and tumor suppressors\). Results\: We present an R\/bioconductor package called MoonlightR which returns a list of candidate driver genes for specific cancer types on the basis of TCGA expression data. The method first infers gene regulatory networks and then carries out a functional enrichment analysis \(FEA\) \(implementing an upstream regulator analysis\, URA\) to score the importance of well\-known biological processes with respect to the studied cancer type. Eventually\, by means of random forests\, MoonlightR predicts two specific roles for the candidate driver genes\: i\) tumor suppressor genes \(TSGs\) and ii\) oncogenes \(OCGs\). As a consequence\, this methodology does not only identify genes playing a dual role \(e.g. TSG in one cancer type and OCG in another\) but also helps in elucidating the biological processes underlying their specific roles. In particular\, MoonlightR can be used to discover OCGs and TSGs in the same cancer type. This may help in answering the question whether some genes change role between early stages \(I\, II\) and late stages \(III\, IV\) in breast cancer. In the future\, this analysis could be useful to determine the causes of different resistances to chemotherapeutic treatments.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/MoonlightR.html
Versions      
License       GPL (>= 3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-moonlightr/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-moonlightr

and update with::

   conda update bioconductor-moonlightr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-moonlightr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-moonlightr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-moonlightr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-moonlightr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-moonlightr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-moonlightr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-moonlightr

