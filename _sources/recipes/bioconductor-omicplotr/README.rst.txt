.. title:: Package Recipe 'bioconductor-omicplotr'
.. highlight: bash


bioconductor-omicplotr
======================

.. conda:recipe:: bioconductor-omicplotr
   :replaces_section_title:

   A Shiny app for visual exploration of omic datasets as compositions\, and differential abundance analysis using ALDEx2. Useful for exploring RNA\-seq\, meta\-RNA\-seq\, 16s rRNA gene sequencing with visualizations such as principal component analysis biplots \(coloured using metadata for visualizing each variable\)\, dendrograms and stacked bar plots\, and effect plots \(ALDEx2\). Input is a table of counts and metadata file \(if metadata exists\)\, with options to filter data by count or by metadata to remove low counts\, or to visualize select samples according to selected metadata.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/omicplotR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-omicplotr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicplotr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicplotr/meta.yaml>`_

   


.. conda:package:: bioconductor-omicplotr

   |downloads_bioconductor-omicplotr| |docker_bioconductor-omicplotr|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-aldex2` >=1.14.0,<1.15.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-compositions`  :conda:package:`r-knitr`  :conda:package:`r-matrixstats`  :conda:package:`r-rmarkdown`  :conda:package:`r-shiny`  :conda:package:`r-vegan`  :conda:package:`r-zcompositions`  

   :required~by: |required_by_bioconductor-omicplotr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omicplotr

   and update with::

      conda update bioconductor-omicplotr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-omicplotr


.. |required_by_bioconductor-omicplotr| conda:required_by:: bioconductor-omicplotr
.. |downloads_bioconductor-omicplotr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicplotr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-omicplotr| image:: https://quay.io/repository/biocontainers/bioconductor-omicplotr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicplotr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicplotr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicplotr/README.html

