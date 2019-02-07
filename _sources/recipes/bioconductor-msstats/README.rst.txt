.. title:: Package Recipe 'bioconductor-msstats'
.. highlight: bash


bioconductor-msstats
====================

.. conda:recipe:: bioconductor-msstats
   :replaces_section_title:

   A set of tools for statistical relative protein significance analysis in DDA\, SRM and DIA experiments.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MSstats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstats/meta.yaml>`_

   


.. conda:package:: bioconductor-msstats

   |downloads_bioconductor-msstats| |docker_bioconductor-msstats|

   :versions: 3.14.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-marray` >=1.60.0,<1.61.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dosnow`  :conda:package:`r-dplyr`  :conda:package:`r-foreach`  :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-gplots`  :conda:package:`r-lme4`  :conda:package:`r-mass`  :conda:package:`r-minpack.lm`  :conda:package:`r-randomforest`  :conda:package:`r-reshape2`  :conda:package:`r-snow`  :conda:package:`r-stringr`  :conda:package:`r-survival`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-msstats|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstats

   and update with::

      conda update bioconductor-msstats

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-msstats


.. |required_by_bioconductor-msstats| conda:required_by:: bioconductor-msstats
.. |downloads_bioconductor-msstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstats.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-msstats| image:: https://quay.io/repository/biocontainers/bioconductor-msstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstats







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstats/README.html

