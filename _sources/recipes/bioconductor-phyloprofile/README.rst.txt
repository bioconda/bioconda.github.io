:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phyloprofile'
.. highlight: bash

bioconductor-phyloprofile
=========================

.. conda:recipe:: bioconductor-phyloprofile
   :replaces_section_title:
   :noindex:

   PhyloProfile

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/PhyloProfile.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-phyloprofile <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phyloprofile>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phyloprofile/meta.yaml>`_

   PhyloProfile is a tool for exploring complex phylogenetic profiles. Phylogenetic profiles\, presence\/absence patterns of genes over a set of species\, are commonly used to trace the functional and evolutionary history of genes across species and time. With PhyloProfile we can enrich regular phylogenetic profiles with further data like sequence\/structure similarity\, to make phylogenetic profiling more meaningful. Besides the interactive visualisation powered by R\-Shiny\, the package offers a set of further analysis features to gain insights like the gene age estimation or core gene identification.


.. conda:package:: bioconductor-phyloprofile

   |downloads_bioconductor-phyloprofile| |docker_bioconductor-phyloprofile|

   :versions:
      
      

      ``1.4.9-0``,  ``1.4.0-0``,  ``1.2.8-1``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.2-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocstyle: ``>=2.18.0,<2.19.0``
   :depends bioconductor-biodist: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-experimenthub: ``>=1.16.0,<1.17.0``
   :depends bioconductor-omadb: ``>=2.6.0,<2.7.0``
   :depends r-ape: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-colourpicker: 
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-energy: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-pbapply: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinyjs: 
   :depends r-xml2: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phyloprofile

   and update with::

      conda update bioconductor-phyloprofile

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phyloprofile:<tag>

   (see `bioconductor-phyloprofile/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phyloprofile| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phyloprofile.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phyloprofile
   :alt:   (downloads)
.. |docker_bioconductor-phyloprofile| image:: https://quay.io/repository/biocontainers/bioconductor-phyloprofile/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phyloprofile
.. _`bioconductor-phyloprofile/tags`: https://quay.io/repository/biocontainers/bioconductor-phyloprofile?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phyloprofile/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phyloprofile/README.html