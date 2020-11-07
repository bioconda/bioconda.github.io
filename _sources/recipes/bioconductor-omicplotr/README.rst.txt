:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicplotr'
.. highlight: bash

bioconductor-omicplotr
======================

.. conda:recipe:: bioconductor-omicplotr
   :replaces_section_title:
   :noindex:

   Visual Exploration of Omic Datasets Using a Shiny App

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/omicplotR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-omicplotr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicplotr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicplotr/meta.yaml>`_

   A Shiny app for visual exploration of omic datasets as compositions\, and differential abundance analysis using ALDEx2. Useful for exploring RNA\-seq\, meta\-RNA\-seq\, 16s rRNA gene sequencing with visualizations such as principal component analysis biplots \(coloured using metadata for visualizing each variable\)\, dendrograms and stacked bar plots\, and effect plots \(ALDEx2\). Input is a table of counts and metadata file \(if metadata exists\)\, with options to filter data by count or by metadata to remove low counts\, or to visualize select samples according to selected metadata.


.. conda:package:: bioconductor-omicplotr

   |downloads_bioconductor-omicplotr| |docker_bioconductor-omicplotr|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-aldex2: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-compositions: 
   :depends r-dt: 
   :depends r-jsonlite: 
   :depends r-knitr: 
   :depends r-matrixstats: 
   :depends r-rmarkdown: 
   :depends r-shiny: 
   :depends r-vegan: 
   :depends r-zcompositions: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omicplotr

   and update with::

      conda update bioconductor-omicplotr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omicplotr:<tag>

   (see `bioconductor-omicplotr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omicplotr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicplotr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicplotr
   :alt:   (downloads)
.. |docker_bioconductor-omicplotr| image:: https://quay.io/repository/biocontainers/bioconductor-omicplotr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicplotr
.. _`bioconductor-omicplotr/tags`: https://quay.io/repository/biocontainers/bioconductor-omicplotr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicplotr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicplotr/README.html