:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctsge'
.. highlight: bash

bioconductor-ctsge
==================

.. conda:recipe:: bioconductor-ctsge
   :replaces_section_title:
   :noindex:

   Clustering of Time Series Gene Expression data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/ctsGE.html
   :license: GPL-2
   :recipe: /`bioconductor-ctsge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctsge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctsge/meta.yaml>`_
   :links: biotools: :biotools:`ctsge`, doi: :doi:`10.1093/bioinformatics/btx116`

   Methodology for supervised clustering of potentially many predictor variables\, such as genes etc.\, in time series datasets Provides functions that help the user assigning genes to predefined set of model profiles.


.. conda:package:: bioconductor-ctsge

   |downloads_bioconductor-ctsge| |docker_bioconductor-ctsge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ccapp: 
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ctsge

   and update with::

      conda update bioconductor-ctsge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ctsge:<tag>

   (see `bioconductor-ctsge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ctsge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctsge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctsge
   :alt:   (downloads)
.. |docker_bioconductor-ctsge| image:: https://quay.io/repository/biocontainers/bioconductor-ctsge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctsge
.. _`bioconductor-ctsge/tags`: https://quay.io/repository/biocontainers/bioconductor-ctsge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ctsge";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctsge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctsge/README.html