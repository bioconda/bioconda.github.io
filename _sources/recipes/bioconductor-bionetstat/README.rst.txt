.. title:: Package Recipe 'bioconductor-bionetstat'
.. highlight: bash


bioconductor-bionetstat
=======================

.. conda:recipe:: bioconductor-bionetstat
   :replaces_section_title:

   A package to perform differential network analysis\, differential node analysis \(differential coexpression analysis\)\, network and metabolic pathways view.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BioNetStat.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-bionetstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionetstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionetstat/meta.yaml>`_

   


.. conda:package:: bioconductor-bionetstat

   |downloads_bioconductor-bionetstat| |docker_bioconductor-bionetstat|

   :versions: 1.2.2

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-pathview` >=1.22.0,<1.23.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-hmisc`  :conda:package:`r-igraph`  :conda:package:`r-knitr`  :conda:package:`r-pheatmap`  :conda:package:`r-plyr`  :conda:package:`r-psych`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rjsonio`  :conda:package:`r-shiny`  :conda:package:`r-shinybs`  :conda:package:`r-whisker`  :conda:package:`r-yaml`  

   :required~by: |required_by_bioconductor-bionetstat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bionetstat

   and update with::

      conda update bioconductor-bionetstat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bionetstat


.. |required_by_bioconductor-bionetstat| conda:required_by:: bioconductor-bionetstat
.. |downloads_bioconductor-bionetstat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bionetstat.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bionetstat| image:: https://quay.io/repository/biocontainers/bioconductor-bionetstat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bionetstat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bionetstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bionetstat/README.html

