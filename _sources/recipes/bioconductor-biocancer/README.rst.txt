.. title:: Package Recipe 'bioconductor-biocancer'
.. highlight: bash


bioconductor-biocancer
======================

.. conda:recipe:: bioconductor-biocancer
   :replaces_section_title:

   bioCancer is a Shiny App to visualize and analyse interactively Multi\-Assays of Cancer Genomic Data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/bioCancer.html
   :license: AGPL-3 | file LICENSE
   :recipe: /`bioconductor-biocancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocancer/meta.yaml>`_

   


.. conda:package:: bioconductor-biocancer

   |downloads_bioconductor-biocancer| |docker_bioconductor-biocancer|

   :versions: 1.10.0

   :depends: :conda:package:`bioconductor-annotationfuncs` >=1.32.0,<1.33.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-clusterprofiler` >=3.10.0,<3.11.0 :conda:package:`bioconductor-dose` >=3.8.0,<3.9.0 :conda:package:`bioconductor-genetclassifier` >=1.22.0,<1.23.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-reactome.db` >=1.66.0,<1.67.0 :conda:package:`bioconductor-reactomepa` >=1.26.0,<1.27.0 :conda:package:`r-algdesign` >=1.1.7.3 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cgdsr` >=1.2.6 :conda:package:`r-diagrammer` >=0.7 :conda:package:`r-dplyr` >=0.7.2 :conda:package:`r-dt` >=0.3 :conda:package:`r-htmlwidgets`  :conda:package:`r-import` >=1.1.0 :conda:package:`r-plyr`  :conda:package:`r-radiant.data` >=0.9.1 :conda:package:`r-shiny` >=1.0.5 :conda:package:`r-shinythemes`  :conda:package:`r-tibble`  :conda:package:`r-visnetwork`  :conda:package:`r-xml` >=3.98 

   :required~by: |required_by_bioconductor-biocancer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocancer

   and update with::

      conda update bioconductor-biocancer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biocancer


.. |required_by_bioconductor-biocancer| conda:required_by:: bioconductor-biocancer
.. |downloads_bioconductor-biocancer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocancer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biocancer| image:: https://quay.io/repository/biocontainers/bioconductor-biocancer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocancer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocancer/README.html

