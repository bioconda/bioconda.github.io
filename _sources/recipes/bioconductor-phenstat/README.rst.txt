.. title:: Package Recipe 'bioconductor-phenstat'
.. highlight: bash


bioconductor-phenstat
=====================

.. conda:recipe:: bioconductor-phenstat
   :replaces_section_title:

   Package contains methods for statistical analysis of phenotypic data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PhenStat.html
   :license: file LICENSE
   :recipe: /`bioconductor-phenstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenstat/meta.yaml>`_

   


.. conda:package:: bioconductor-phenstat

   |downloads_bioconductor-phenstat| |docker_bioconductor-phenstat|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`libgfortran` >=3.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-car`  :conda:package:`r-corrplot`  :conda:package:`r-ggplot2`  :conda:package:`r-knitr`  :conda:package:`r-lme4`  :conda:package:`r-logistf`  :conda:package:`r-mass`  :conda:package:`r-msgps`  :conda:package:`r-nlme`  :conda:package:`r-nortest`  :conda:package:`r-pingr`  :conda:package:`r-reshape`  :conda:package:`r-smoothwin`  

   :required~by: |required_by_bioconductor-phenstat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phenstat

   and update with::

      conda update bioconductor-phenstat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-phenstat


.. |required_by_bioconductor-phenstat| conda:required_by:: bioconductor-phenstat
.. |downloads_bioconductor-phenstat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phenstat.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-phenstat| image:: https://quay.io/repository/biocontainers/bioconductor-phenstat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phenstat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phenstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phenstat/README.html

