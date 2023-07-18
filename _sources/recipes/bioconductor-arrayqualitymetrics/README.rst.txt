:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arrayqualitymetrics'
.. highlight: bash

bioconductor-arrayqualitymetrics
================================

.. conda:recipe:: bioconductor-arrayqualitymetrics
   :replaces_section_title:
   :noindex:

   Quality metrics report for microarray data sets

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/arrayQualityMetrics.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-arrayqualitymetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayqualitymetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayqualitymetrics/meta.yaml>`_
   :links: biotools: :biotools:`arrayqualitymetrics`

   This package generates microarray quality metrics reports for data in Bioconductor microarray data containers \(ExpressionSet\, NChannelSet\, AffyBatch\). One and two color array platforms are supported.


.. conda:package:: bioconductor-arrayqualitymetrics

   |downloads_bioconductor-arrayqualitymetrics| |docker_bioconductor-arrayqualitymetrics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.56.0-0</code>,  <code>3.54.0-0</code>,  <code>3.50.0-0</code>,  <code>3.48.0-0</code>,  <code>3.46.0-1</code>,  <code>3.46.0-0</code>,  <code>3.44.0-0</code>,  <code>3.42.0-0</code>,  <code>3.40.0-1</code>,  </span></summary>
      

      ``3.56.0-0``,  ``3.54.0-0``,  ``3.50.0-0``,  ``3.48.0-0``,  ``3.46.0-1``,  ``3.46.0-0``,  ``3.44.0-0``,  ``3.42.0-0``,  ``3.40.0-1``,  ``3.38.0-0``,  ``3.36.0-0``,  ``3.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-affyplm: ``>=1.76.0,<1.77.0``
   :depends bioconductor-beadarray: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-vsn: ``>=3.68.0,<3.69.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gridsvg: ``>=1.4-3``
   :depends r-hmisc: 
   :depends r-hwriter: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-rcolorbrewer: 
   :depends r-setrng: 
   :depends r-svglite: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arrayqualitymetrics

   and update with::

      conda update bioconductor-arrayqualitymetrics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-arrayqualitymetrics:<tag>

   (see `bioconductor-arrayqualitymetrics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-arrayqualitymetrics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arrayqualitymetrics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arrayqualitymetrics
   :alt:   (downloads)
.. |docker_bioconductor-arrayqualitymetrics| image:: https://quay.io/repository/biocontainers/bioconductor-arrayqualitymetrics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arrayqualitymetrics
.. _`bioconductor-arrayqualitymetrics/tags`: https://quay.io/repository/biocontainers/bioconductor-arrayqualitymetrics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-arrayqualitymetrics";
        var versions = ["3.56.0","3.54.0","3.50.0","3.48.0","3.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arrayqualitymetrics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arrayqualitymetrics/README.html