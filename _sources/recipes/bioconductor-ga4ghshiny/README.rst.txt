:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ga4ghshiny'
.. highlight: bash

bioconductor-ga4ghshiny
=======================

.. conda:recipe:: bioconductor-ga4ghshiny
   :replaces_section_title:

   GA4GHshiny package provides an easy way to interact with data servers based on Global Alliance for Genomics and Health \(GA4GH\) genomics API through a Shiny application. It also integrates with Beacon Network.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/GA4GHshiny.html
   :license: GPL-3
   :recipe: /`bioconductor-ga4ghshiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ga4ghshiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ga4ghshiny/meta.yaml>`_

   


.. conda:package:: bioconductor-ga4ghshiny

   |downloads_bioconductor-ga4ghshiny| |docker_bioconductor-ga4ghshiny|

   :versions: 1.6.0-1, 1.4.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-ga4ghclient: >=1.8.0,<1.9.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-openxlsx: 
   :depends r-purrr: 
   :depends r-shiny: 
   :depends r-shinyjs: 
   :depends r-shinythemes: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ga4ghshiny

   and update with::

      conda update bioconductor-ga4ghshiny

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ga4ghshiny:<tag>

   (see `bioconductor-ga4ghshiny/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ga4ghshiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ga4ghshiny.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ga4ghshiny
   :alt:   (downloads)
.. |docker_bioconductor-ga4ghshiny| image:: https://quay.io/repository/biocontainers/bioconductor-ga4ghshiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ga4ghshiny
.. _`bioconductor-ga4ghshiny/tags`: https://quay.io/repository/biocontainers/bioconductor-ga4ghshiny?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ga4ghshiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ga4ghshiny/README.html