.. _`bioconductor-sigcheck`:

bioconductor-sigcheck
=====================

|downloads|

While gene signatures are frequently used to predict phenotypes \(e.g. predict prognosis of cancer patients\)\, it it not always clear how optimal or meaningful they are \(cf David Venet\, Jacques E. Dumont\, and Vincent Detours\' paper \"Most Random Gene Expression Signatures Are Significantly Associated with Breast Cancer Outcome\"\). Based on suggestions in that paper\, SigCheck accepts a data set \(as an ExpressionSet\) and a gene signature\, and compares its performance on survival and\/or classification tasks against a\) random gene signatures of the same length\; b\) known\, related and unrelated gene signatures\; and c\) permuted data and\/or metadata.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/SigCheck.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-sigcheck/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-sigcheck

and update with::

   conda update bioconductor-sigcheck



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-sigcheck.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-sigcheck/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-sigcheck/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-sigcheck/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-sigcheck
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-sigcheck/status
                :target: https://quay.io/repository/biocontainers/bioconductor-sigcheck

