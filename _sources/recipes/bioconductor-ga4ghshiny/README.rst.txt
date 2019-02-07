.. title:: Package Recipe 'bioconductor-ga4ghshiny'
.. highlight: bash


bioconductor-ga4ghshiny
=======================

.. conda:recipe:: bioconductor-ga4ghshiny
   :replaces_section_title:

   GA4GHshiny package provides an easy way to interact with data servers based on Global Alliance for Genomics and Health \(GA4GH\) genomics API through a Shiny application. It also integrates with Beacon Network.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GA4GHshiny.html
   :license: GPL-3
   :recipe: /`bioconductor-ga4ghshiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ga4ghshiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ga4ghshiny/meta.yaml>`_

   


.. conda:package:: bioconductor-ga4ghshiny

   |downloads_bioconductor-ga4ghshiny| |docker_bioconductor-ga4ghshiny|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-ga4ghclient` >=1.6.0,<1.7.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-dt`  :conda:package:`r-openxlsx`  :conda:package:`r-purrr`  :conda:package:`r-shiny`  :conda:package:`r-shinyjs`  :conda:package:`r-shinythemes`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-ga4ghshiny|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ga4ghshiny

   and update with::

      conda update bioconductor-ga4ghshiny

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ga4ghshiny


.. |required_by_bioconductor-ga4ghshiny| conda:required_by:: bioconductor-ga4ghshiny
.. |downloads_bioconductor-ga4ghshiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ga4ghshiny.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ga4ghshiny| image:: https://quay.io/repository/biocontainers/bioconductor-ga4ghshiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ga4ghshiny







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ga4ghshiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ga4ghshiny/README.html

