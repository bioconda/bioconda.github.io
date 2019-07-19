:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gladiatox'
.. highlight: bash

bioconductor-gladiatox
======================

.. conda:recipe:: bioconductor-gladiatox
   :replaces_section_title:

   GladiaTOX R package is an open\-source\, flexible solution to high\-content screening data processing and reporting in biomedical research. GladiaTOX takes advantage of the tcpl core functionalities and provides a number of extensions\: it provides a web\-service solution to fetch raw data\; it computes severity scores and exports ToxPi formatted files\; furthermore it contains a suite of functionalities to generate pdf reports for quality control and data processing.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/GladiaTOX.html
   :license: GPL-2
   :recipe: /`bioconductor-gladiatox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gladiatox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gladiatox/meta.yaml>`_

   


.. conda:package:: bioconductor-gladiatox

   |downloads_bioconductor-gladiatox| |docker_bioconductor-gladiatox|

   :versions: 1.0.0-1
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-brew: 
   :depends r-data.table: >=1.9.4
   :depends r-dbi: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-numderiv: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-rjsonio: 
   :depends r-rmysql: 
   :depends r-rsqlite: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-xml: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gladiatox

   and update with::

      conda update bioconductor-gladiatox

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gladiatox:<tag>

   (see `bioconductor-gladiatox/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gladiatox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gladiatox.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gladiatox
   :alt:   (downloads)
.. |docker_bioconductor-gladiatox| image:: https://quay.io/repository/biocontainers/bioconductor-gladiatox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gladiatox
.. _`bioconductor-gladiatox/tags`: https://quay.io/repository/biocontainers/bioconductor-gladiatox?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gladiatox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gladiatox/README.html