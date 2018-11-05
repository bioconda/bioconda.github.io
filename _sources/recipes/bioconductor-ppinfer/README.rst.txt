.. _`bioconductor-ppinfer`:

bioconductor-ppinfer
====================

|downloads|

Interactions between proteins occur in many\, if not most\, biological processes. Most proteins perform their functions in networks associated with other proteins and other biomolecules. This fact has motivated the development of a variety of experimental methods for the identification of protein interactions. This variety has in turn ushered in the development of numerous different computational approaches for modeling and predicting protein interactions. Sometimes an experiment is aimed at identifying proteins closely related to some interesting proteins. A network based statistical learning method is used to infer the putative functions of proteins from the known functions of its neighboring proteins on a PPI network. This package identifies such proteins often involved in the same or similar biological functions.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/PPInfer.html
Versions      1.2.4, 1.4.0, 1.6.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppinfer



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-ppinfer

and update with::

   conda update bioconductor-ppinfer



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-ppinfer.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-ppinfer/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-ppinfer/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-ppinfer/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-ppinfer
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-ppinfer/status
                :target: https://quay.io/repository/biocontainers/bioconductor-ppinfer

