:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiome'
.. highlight: bash

bioconductor-microbiome
=======================

.. conda:recipe:: bioconductor-microbiome
   :replaces_section_title:
   :noindex:

   Microbiome Analytics

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/microbiome.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-microbiome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiome/meta.yaml>`_

   Utilities for microbiome analysis.


.. conda:package:: bioconductor-microbiome

   |downloads_bioconductor-microbiome| |docker_bioconductor-microbiome|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.2-0``,  ``1.2.1-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-phyloseq: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-scales: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-microbiome

   and update with::

      conda update bioconductor-microbiome

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microbiome:<tag>

   (see `bioconductor-microbiome/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microbiome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiome
   :alt:   (downloads)
.. |docker_bioconductor-microbiome| image:: https://quay.io/repository/biocontainers/bioconductor-microbiome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiome
.. _`bioconductor-microbiome/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiome?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiome";
        var versions = ["1.14.0","1.12.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiome/README.html