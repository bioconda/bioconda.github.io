.. _`bioconductor-coregnet`:

bioconductor-coregnet
=====================

|downloads|

This package provides methods to identify active transcriptional programs. Methods and classes are provided to import or infer large scale co\-regulatory network from transcriptomic data. The specificity of the encoded networks is to model Transcription Factor cooperation. External regulation evidences \(TFBS\, ChIP\,...\) can be integrated to assess the inferred network and refine it if necessary. Transcriptional activity of the regulators in the network can be estimated using an measure of their influence in a given sample. Finally\, an interactive UI can be used to navigate through the network of cooperative regulators and to visualize their activity in a specific sample or subgroup sample. The proposed visualization tool can be used to integrate gene expression\, transcriptional activity\, copy number status\, sample classification and a transcriptional network including co\-regulation information.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/CoRegNet.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coregnet



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-coregnet

and update with::

   conda update bioconductor-coregnet



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-coregnet.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-coregnet/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-coregnet/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-coregnet/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-coregnet
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-coregnet/status
                :target: https://quay.io/repository/biocontainers/bioconductor-coregnet

