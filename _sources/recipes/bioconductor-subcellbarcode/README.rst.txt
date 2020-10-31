:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-subcellbarcode'
.. highlight: bash

bioconductor-subcellbarcode
===========================

.. conda:recipe:: bioconductor-subcellbarcode
   :replaces_section_title:
   :noindex:

   SubCellBarCode\: Integrated workflow for robust mapping and visualizing whole human spatial proteome

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/SubCellBarCode.html
   :license: GPL-2
   :recipe: /`bioconductor-subcellbarcode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-subcellbarcode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-subcellbarcode/meta.yaml>`_

   Mass\-Spectrometry based spatial proteomics have enabled the proteome\-wide mapping of protein subcellular localization \(Orre et al. 2019\, Molecular Cell\). SubCellBarCode R package robustly classifies proteins into corresponding subcellular localization.


.. conda:package:: bioconductor-subcellbarcode

   |downloads_bioconductor-subcellbarcode| |docker_bioconductor-subcellbarcode|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.12.0,<3.13.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-caret: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-networkd3: 
   :depends r-rtsne: 
   :depends r-scatterplot3d: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-subcellbarcode

   and update with::

      conda update bioconductor-subcellbarcode

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-subcellbarcode:<tag>

   (see `bioconductor-subcellbarcode/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-subcellbarcode| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-subcellbarcode.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-subcellbarcode
   :alt:   (downloads)
.. |docker_bioconductor-subcellbarcode| image:: https://quay.io/repository/biocontainers/bioconductor-subcellbarcode/status
   :target: https://quay.io/repository/biocontainers/bioconductor-subcellbarcode
.. _`bioconductor-subcellbarcode/tags`: https://quay.io/repository/biocontainers/bioconductor-subcellbarcode?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-subcellbarcode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-subcellbarcode/README.html