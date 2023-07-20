:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-derfinderplot'
.. highlight: bash

bioconductor-derfinderplot
==========================

.. conda:recipe:: bioconductor-derfinderplot
   :replaces_section_title:
   :noindex:

   Plotting functions for derfinder

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/derfinderPlot.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-derfinderplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinderplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinderplot/meta.yaml>`_
   :links: biotools: :biotools:`derfinderplot`

   This package provides plotting functions for results from the derfinder package. This helps separate the graphical dependencies required for making these plots from the core functionality of derfinder.


.. conda:package:: bioconductor-derfinderplot

   |downloads_bioconductor-derfinderplot| |docker_bioconductor-derfinderplot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.27.1-0</code>,  <code>1.26.0-0</code>,  <code>1.24.1-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.27.1-0``,  ``1.26.0-0``,  ``1.24.1-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.1-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-derfinder: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-ggbio: ``>=1.48.0,<1.49.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-derfinderplot

   and update with::

      conda update bioconductor-derfinderplot

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-derfinderplot:<tag>

   (see `bioconductor-derfinderplot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-derfinderplot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-derfinderplot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-derfinderplot
   :alt:   (downloads)
.. |docker_bioconductor-derfinderplot| image:: https://quay.io/repository/biocontainers/bioconductor-derfinderplot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-derfinderplot
.. _`bioconductor-derfinderplot/tags`: https://quay.io/repository/biocontainers/bioconductor-derfinderplot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-derfinderplot";
        var versions = ["1.34.0","1.32.0","1.27.1","1.26.0","1.24.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-derfinderplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-derfinderplot/README.html