:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-champ'
.. highlight: bash

bioconductor-champ
==================

.. conda:recipe:: bioconductor-champ
   :replaces_section_title:

   The package includes quality control metrics\, a selection of normalization methods and novel methods to identify differentially methylated regions and to highlight copy number alterations.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ChAMP.html
   :license: GPL-3
   :recipe: /`bioconductor-champ <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-champ>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-champ/meta.yaml>`_

   


.. conda:package:: bioconductor-champ

   |downloads_bioconductor-champ| |docker_bioconductor-champ|

   :versions: 2.12.2-0
   
   :depends bioconductor-bumphunter: >=1.24.0,<1.25.0
   
   :depends bioconductor-champdata: >=2.14.0,<2.15.0
   
   :depends bioconductor-dmrcate: >=1.18.0,<1.19.0
   
   :depends bioconductor-dnacopy: >=1.56.0,<1.57.0
   
   :depends bioconductor-fem: >=3.10.0,<3.11.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-globaltest: >=5.36.0,<5.37.0
   
   :depends bioconductor-goseq: >=1.34.0,<1.35.0
   
   :depends bioconductor-illumina450probevariants.db: >=1.18.0,<1.19.0
   
   :depends bioconductor-illuminahumanmethylation450kmanifest: >=0.4.0,<0.5.0
   
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b2.hg19: >=0.6.0,<0.7.0
   
   :depends bioconductor-illuminahumanmethylationepicmanifest: >=0.3.0,<0.4.0
   
   :depends bioconductor-illuminaio: >=0.24.0,<0.25.0
   
   :depends bioconductor-impute: >=1.56.0,<1.57.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-marray: >=1.60.0,<1.61.0
   
   :depends bioconductor-minfi: >=1.28.0,<1.29.0
   
   :depends bioconductor-missmethyl: >=1.16.0,<1.17.0
   
   :depends bioconductor-preprocesscore: >=1.44.0,<1.45.0
   
   :depends bioconductor-qvalue: >=2.14.0,<2.15.0
   
   :depends bioconductor-sva: >=3.30.0,<3.31.0
   
   :depends bioconductor-watermelon: >=1.26.0,<1.27.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-combinat: 
   
   :depends r-dendextend: 
   
   :depends r-doparallel: 
   
   :depends r-hmisc: 
   
   :depends r-isva: 
   
   :depends r-kpmt: 
   
   :depends r-matrixstats: 
   
   :depends r-plotly: >=4.5.6
   
   :depends r-plyr: 
   
   :depends r-prettydoc: 
   
   :depends r-quadprog: 
   
   :depends r-rcolorbrewer: 
   
   :depends r-rmarkdown: 
   
   :depends r-rpmm: 
   
   :depends r-shiny: 
   
   :depends r-shinythemes: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-champ

   and update with::

      conda update bioconductor-champ

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-champ:<tag>

   (see `bioconductor-champ/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-champ| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-champ.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-champ| image:: https://quay.io/repository/biocontainers/bioconductor-champ/status
   :target: https://quay.io/repository/biocontainers/bioconductor-champ
.. _`bioconductor-champ/tags`: https://quay.io/repository/biocontainers/bioconductor-champ?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-champ/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-champ/README.html