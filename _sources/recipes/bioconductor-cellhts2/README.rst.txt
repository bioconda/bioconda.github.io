.. title:: Package Recipe 'bioconductor-cellhts2'
.. highlight: bash


bioconductor-cellhts2
=====================

.. conda:recipe:: bioconductor-cellhts2
   :replaces_section_title:

   This package provides tools for the analysis of high\-throughput assays that were performed in microtitre plate formats \(including but not limited to 384\-well plates\). The functionality includes data import and management\, normalisation\, quality assessment\, replicate summarisation and statistical scoring. A webpage that provides a detailed graphical overview over the data and analysis results is produced. In our work\, we have applied the package to RNAi screens on fly and human cells\, and for screens of yeast libraries. See \?cellHTS2 for a brief introduction.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cellHTS2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cellhts2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellhts2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellhts2/meta.yaml>`_
   :links: biotools: :biotools:`cellhts2`

   


.. conda:package:: bioconductor-cellhts2

   |downloads_bioconductor-cellhts2| |docker_bioconductor-cellhts2|

   :versions: 2.46.0, 2.44.0, 2.42.0, 2.40.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-category` >=2.48.0,<2.49.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-gseabase` >=1.44.0,<1.45.0 :conda:package:`bioconductor-prada` >=1.58.0,<1.59.0 :conda:package:`bioconductor-splots` >=1.48.0,<1.49.0 :conda:package:`bioconductor-vsn` >=3.50.0,<3.51.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-hwriter`  :conda:package:`r-locfit`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-cellhts2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellhts2

   and update with::

      conda update bioconductor-cellhts2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cellhts2


.. |required_by_bioconductor-cellhts2| conda:required_by:: bioconductor-cellhts2
.. |downloads_bioconductor-cellhts2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellhts2.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cellhts2| image:: https://quay.io/repository/biocontainers/bioconductor-cellhts2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellhts2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellhts2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellhts2/README.html

