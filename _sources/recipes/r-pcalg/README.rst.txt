.. _`r-pcalg`:

r-pcalg
=======

|downloads|

Functions for causal structure learning and causal inference using graphical models. The main algorithms for causal structure learning are PC \(for observational data without hidden variables\)\, FCI and RFCI \(for observational data with hidden variables\)\, and GIES \(for a mix of data from observational studies \(i.e. observational data\) and data from experiments involving interventions \(i.e. interventional data\) without hidden variables\). For causal inference the IDA algorithm\, the Generalized Backdoor Criterion \(GBC\)\, the Generalized Adjustment Criterion \(GAC\) and some related functions are implemented. Functions for incorporating background knowledge are provided.

============= ===========
Home          http://pcalg.r-forge.r-project.org/
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//r-pcalg/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-pcalg

and update with::

   conda update r-pcalg



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-pcalg.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-pcalg/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-pcalg/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-pcalg/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-pcalg
.. |docker| image:: https://quay.io/repository/biocontainers/r-pcalg/status
                :target: https://quay.io/repository/biocontainers/r-pcalg

