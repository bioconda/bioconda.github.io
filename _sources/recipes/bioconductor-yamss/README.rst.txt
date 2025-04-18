:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yamss'
.. highlight: bash

bioconductor-yamss
==================

.. conda:recipe:: bioconductor-yamss
   :replaces_section_title:
   :noindex:

   Tools for high\-throughput metabolomics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/yamss.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-yamss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yamss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yamss/meta.yaml>`_
   :links: biotools: :biotools:`yamss`

   Tools to analyze and visualize high\-throughput metabolomics data aquired using chromatography\-mass spectrometry. These tools preprocess data in a way that enables reliable and powerful differential analysis. At the core of these methods is a peak detection phase that pools information across all samples simultaneously. This is in contrast to other methods that detect peaks in a sample\-by\-sample basis.


.. conda:package:: bioconductor-yamss

   |downloads_bioconductor-yamss| |docker_bioconductor-yamss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-ebimage: ``>=4.48.0,<4.49.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-mzr: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-matrix: 
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

      mamba install bioconductor-yamss

   and update with::

      mamba update bioconductor-yamss

  To create a new environment, run::

      mamba create --name myenvname bioconductor-yamss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yamss:<tag>

   (see `bioconductor-yamss/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yamss| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yamss.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yamss
   :alt:   (downloads)
.. |docker_bioconductor-yamss| image:: https://quay.io/repository/biocontainers/bioconductor-yamss/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yamss
.. _`bioconductor-yamss/tags`: https://quay.io/repository/biocontainers/bioconductor-yamss?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-yamss";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yamss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yamss/README.html