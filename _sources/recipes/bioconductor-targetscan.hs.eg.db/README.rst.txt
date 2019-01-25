.. _`bioconductor-targetscan.hs.eg.db`:

bioconductor-targetscan.hs.eg.db
================================

|downloads|

TargetScan miRNA target predictions for human assembled using data from the TargetScan website. TargetScan predicts biological targets of miRNAs by searching for the presence of conserved 8mer and 7mer sites that match the seed region of each miRNA. Also identified are sites with mismatches in the seed region that are compensated by conserved 3\' pairing. In mammals\, predictions are ranked based on the predicted efficacy of targeting as calculated using the context scores of the sites.

============= ===========
Home          https://bioconductor.org/packages/3.8/data/annotation/html/targetscan.Hs.eg.db.html
Versions      0.6.1
License       file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-targetscan.hs.eg.db/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-targetscan.hs.eg.db

and update with::

   conda update bioconductor-targetscan.hs.eg.db



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-targetscan.hs.eg.db.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-targetscan.hs.eg.db/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-targetscan.hs.eg.db/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-targetscan.hs.eg.db/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-targetscan.hs.eg.db
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-targetscan.hs.eg.db/status
                :target: https://quay.io/repository/biocontainers/bioconductor-targetscan.hs.eg.db

