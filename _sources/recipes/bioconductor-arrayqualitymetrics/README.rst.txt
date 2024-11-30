:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arrayqualitymetrics'
.. highlight: bash

bioconductor-arrayqualitymetrics
================================

.. conda:recipe:: bioconductor-arrayqualitymetrics
   :replaces_section_title:
   :noindex:

   Quality metrics report for microarray data sets

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/arrayQualityMetrics.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-arrayqualitymetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayqualitymetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayqualitymetrics/meta.yaml>`_
   :links: biotools: :biotools:`arrayqualitymetrics`

   This package generates microarray quality metrics reports for data in Bioconductor microarray data containers \(ExpressionSet\, NChannelSet\, AffyBatch\). One and two color array platforms are supported.


.. conda:package:: bioconductor-arrayqualitymetrics

   |downloads_bioconductor-arrayqualitymetrics| |docker_bioconductor-arrayqualitymetrics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.58.0-0</code>,  <code>3.56.0-0</code>,  <code>3.54.0-0</code>,  <code>3.50.0-0</code>,  <code>3.48.0-0</code>,  <code>3.46.0-1</code>,  <code>3.46.0-0</code>,  <code>3.44.0-0</code>,  <code>3.42.0-0</code>,  </span></summary>
      

      ``3.58.0-0``,  ``3.56.0-0``,  ``3.54.0-0``,  ``3.50.0-0``,  ``3.48.0-0``,  ``3.46.0-1``,  ``3.46.0-0``,  ``3.44.0-0``,  ``3.42.0-0``,  ``3.40.0-1``,  ``3.38.0-0``,  ``3.36.0-0``,  ``3.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-affyplm: ``>=1.78.0,<1.79.0``
   :depends bioconductor-beadarray: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-vsn: ``>=3.70.0,<3.71.0``
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

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-arrayqualitymetrics

   and update with::

      mamba update bioconductor-arrayqualitymetrics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-arrayqualitymetrics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["3.58.0","3.56.0","3.54.0","3.50.0","3.48.0"];
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