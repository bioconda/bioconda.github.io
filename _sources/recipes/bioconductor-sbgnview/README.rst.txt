:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sbgnview'
.. highlight: bash

bioconductor-sbgnview
=====================

.. conda:recipe:: bioconductor-sbgnview
   :replaces_section_title:

   Overlay omics data onto SBGN pathway diagram

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/SBGNview.html
   :license: AGPL-3
   :recipe: /`bioconductor-sbgnview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sbgnview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sbgnview/meta.yaml>`_

   SBGNview is an R package for visualizing omics data on SBGN pathway maps. Given omics data and a SBGN\-ML file with layout information\, SBGNview can display omics data as colors on glyphs and output image files. SBGNview provides extensive options to control glyph and edge features \(e.g. color\, line width etc.\). To facilitate pathway based analysis\, SBGNview also provides functions to extract molecule sets from SBGN\-ML files. SBGNview can map a large collection of gene\, protein and compound ID typs to glyphs.


.. conda:package:: bioconductor-sbgnview

   |downloads_bioconductor-sbgnview| |docker_bioconductor-sbgnview|

   :versions: 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-pathview: >=1.28.0,<1.29.0
   :depends bioconductor-sbgnview.data: >=1.2.0,<1.3.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-rdpack: 
   :depends r-rmarkdown: 
   :depends r-rsvg: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sbgnview

   and update with::

      conda update bioconductor-sbgnview

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sbgnview:<tag>

   (see `bioconductor-sbgnview/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sbgnview| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sbgnview.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sbgnview
   :alt:   (downloads)
.. |docker_bioconductor-sbgnview| image:: https://quay.io/repository/biocontainers/bioconductor-sbgnview/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sbgnview
.. _`bioconductor-sbgnview/tags`: https://quay.io/repository/biocontainers/bioconductor-sbgnview?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sbgnview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sbgnview/README.html