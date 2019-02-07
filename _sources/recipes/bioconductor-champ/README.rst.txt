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

   :versions: 2.12.2

   :depends: :conda:package:`bioconductor-bumphunter` >=1.24.0,<1.25.0 :conda:package:`bioconductor-champdata` >=2.14.0,<2.15.0 :conda:package:`bioconductor-dmrcate` >=1.18.0,<1.19.0 :conda:package:`bioconductor-dnacopy` >=1.56.0,<1.57.0 :conda:package:`bioconductor-fem` >=3.10.0,<3.11.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-globaltest` >=5.36.0,<5.37.0 :conda:package:`bioconductor-goseq` >=1.34.0,<1.35.0 :conda:package:`bioconductor-illumina450probevariants.db` >=1.18.0,<1.19.0 :conda:package:`bioconductor-illuminahumanmethylation450kmanifest` >=0.4.0,<0.5.0 :conda:package:`bioconductor-illuminahumanmethylationepicanno.ilm10b2.hg19` >=0.6.0,<0.7.0 :conda:package:`bioconductor-illuminahumanmethylationepicmanifest` >=0.3.0,<0.4.0 :conda:package:`bioconductor-illuminaio` >=0.24.0,<0.25.0 :conda:package:`bioconductor-impute` >=1.56.0,<1.57.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-marray` >=1.60.0,<1.61.0 :conda:package:`bioconductor-minfi` >=1.28.0,<1.29.0 :conda:package:`bioconductor-missmethyl` >=1.16.0,<1.17.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`bioconductor-sva` >=3.30.0,<3.31.0 :conda:package:`bioconductor-watermelon` >=1.26.0,<1.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-combinat`  :conda:package:`r-dendextend`  :conda:package:`r-doparallel`  :conda:package:`r-hmisc`  :conda:package:`r-isva`  :conda:package:`r-kpmt`  :conda:package:`r-matrixstats`  :conda:package:`r-plotly` >=4.5.6 :conda:package:`r-plyr`  :conda:package:`r-prettydoc`  :conda:package:`r-quadprog`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rmarkdown`  :conda:package:`r-rpmm`  :conda:package:`r-shiny`  :conda:package:`r-shinythemes`  

   :required~by: |required_by_bioconductor-champ|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-champ

   and update with::

      conda update bioconductor-champ

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-champ


.. |required_by_bioconductor-champ| conda:required_by:: bioconductor-champ
.. |downloads_bioconductor-champ| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-champ.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-champ| image:: https://quay.io/repository/biocontainers/bioconductor-champ/status
   :target: https://quay.io/repository/biocontainers/bioconductor-champ







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-champ/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-champ/README.html

