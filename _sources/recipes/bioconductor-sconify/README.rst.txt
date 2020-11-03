:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sconify'
.. highlight: bash

bioconductor-sconify
====================

.. conda:recipe:: bioconductor-sconify
   :replaces_section_title:
   :noindex:

   A toolkit for performing KNN\-based statistics for flow and mass cytometry data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/Sconify.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sconify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sconify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sconify/meta.yaml>`_

   This package does k\-nearest neighbor based statistics and visualizations with flow and mass cytometery data. This gives tSNE maps\"fold change\" functionality and provides a data quality metric by assessing manifold overlap between fcs files expected to be the same. Other applications using this package include imputation\, marker redundancy\, and testing the relative information loss of lower dimension embeddings compared to the original manifold.


.. conda:package:: bioconductor-sconify

   |downloads_bioconductor-sconify| |docker_bioconductor-sconify|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-flowcore: ``>=2.2.0,<2.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-fnn: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-readr: 
   :depends r-rtsne: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sconify

   and update with::

      conda update bioconductor-sconify

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sconify:<tag>

   (see `bioconductor-sconify/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sconify| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sconify.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sconify
   :alt:   (downloads)
.. |docker_bioconductor-sconify| image:: https://quay.io/repository/biocontainers/bioconductor-sconify/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sconify
.. _`bioconductor-sconify/tags`: https://quay.io/repository/biocontainers/bioconductor-sconify?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sconify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sconify/README.html