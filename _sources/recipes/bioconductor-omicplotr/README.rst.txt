.. _`bioconductor-omicplotr`:

bioconductor-omicplotr
======================

|downloads|

A Shiny app for visual exploration of omic datasets as compositions\, and differential abundance analysis using ALDEx2. Useful for exploring RNA\-seq\, meta\-RNA\-seq\, 16s rRNA gene sequencing with visualizations such as principal component analysis biplots \(coloured using metadata for visualizing each variable\)\, dendrograms and stacked bar plots\, and effect plots \(ALDEx2\). Input is a table of counts and metadata file \(if metadata exists\)\, with options to filter data by count or by metadata to remove low counts\, or to visualize select samples according to selected metadata.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/omicplotR.html
Versions      1.2.0
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-omicplotr/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-omicplotr

and update with::

   conda update bioconductor-omicplotr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-omicplotr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-omicplotr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-omicplotr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-omicplotr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-omicplotr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-omicplotr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-omicplotr

