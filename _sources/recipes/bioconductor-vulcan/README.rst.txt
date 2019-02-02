.. _`bioconductor-vulcan`:

bioconductor-vulcan
===================

|downloads|

Vulcan \(VirtUaL ChIP\-Seq Analysis through Networks\) is a package that interrogates gene regulatory networks to infer cofactors significantly enriched in a differential binding signature coming from ChIP\-Seq data. In order to do so\, our package combines strategies from different BioConductor packages\: DESeq for data normalization\, ChIPpeakAnno and DiffBind for annotation and definition of ChIP\-Seq genomic peaks\, csaw to define optimal peak width and viper for applying a regulatory network over a differential binding signature.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/vulcan.html
Versions      1.4.0
License       LGPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-vulcan/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-vulcan

and update with::

   conda update bioconductor-vulcan



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-vulcan.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-vulcan/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-vulcan/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-vulcan/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-vulcan
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-vulcan/status
                :target: https://quay.io/repository/biocontainers/bioconductor-vulcan

