.. _`bioconductor-nucpos`:

bioconductor-nucpos
===================

|downloads|

nuCpos\, a derivative of NuPoP\, is an R package for prediction of nucleosome positions. In nuCpos\, a duration hidden Markov model is trained with a chemical map of nucleosomes either from budding yeast\, fission yeast\, or mouse embryonic stem cells. nuCpos outputs the Viterbi \(most probable\) path of nucleosome\-linker states\, predicted nucleosome occupancy scores and histone binding affinity \(HBA\) scores as NuPoP does. nuCpos can also calculate local and whole nucleosomal HBA scores for a given 147\-bp sequence. Furthermore\, effect of genetic alterations on nucleosome occupancy can be predicted with this package. The parental package NuPoP\, which is based on an MNase\-seq\-based map of budding yeast nucleosomes\, was developed by Ji\-Ping Wang and Liqun Xi\, licensed under GPL\-2.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/nuCpos.html
Versions      1.0.1, 1.0.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-nucpos/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-nucpos

and update with::

   conda update bioconductor-nucpos



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-nucpos.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-nucpos/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-nucpos/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-nucpos/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-nucpos
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-nucpos/status
                :target: https://quay.io/repository/biocontainers/bioconductor-nucpos

