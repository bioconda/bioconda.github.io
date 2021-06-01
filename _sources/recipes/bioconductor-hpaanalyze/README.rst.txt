:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hpaanalyze'
.. highlight: bash

bioconductor-hpaanalyze
=======================

.. conda:recipe:: bioconductor-hpaanalyze
   :replaces_section_title:
   :noindex:

   Retrieve and analyze data from the Human Protein Atlas

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/HPAanalyze.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-hpaanalyze <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpaanalyze>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpaanalyze/meta.yaml>`_

   Provide functions for retrieving\, exploratory analyzing and visualizing the Human Protein Atlas data.


.. conda:package:: bioconductor-hpaanalyze

   |downloads_bioconductor-hpaanalyze| |docker_bioconductor-hpaanalyze|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-openxlsx: 
   :depends r-tibble: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hpaanalyze

   and update with::

      conda update bioconductor-hpaanalyze

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hpaanalyze:<tag>

   (see `bioconductor-hpaanalyze/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hpaanalyze| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hpaanalyze.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hpaanalyze
   :alt:   (downloads)
.. |docker_bioconductor-hpaanalyze| image:: https://quay.io/repository/biocontainers/bioconductor-hpaanalyze/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hpaanalyze
.. _`bioconductor-hpaanalyze/tags`: https://quay.io/repository/biocontainers/bioconductor-hpaanalyze?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hpaanalyze/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hpaanalyze/README.html