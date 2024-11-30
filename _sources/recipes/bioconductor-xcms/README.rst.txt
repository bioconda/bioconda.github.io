:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xcms'
.. highlight: bash

bioconductor-xcms
=================

.. conda:recipe:: bioconductor-xcms
   :replaces_section_title:
   :noindex:

   LC\-MS and GC\-MS Data Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/xcms.html
   :license: GPL-2.0-or-later + file LICENSE
   :recipe: /`bioconductor-xcms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcms/meta.yaml>`_
   :links: biotools: :biotools:`xcms`

   Framework for processing and visualization of chromatographically separated and single\-spectra mass spectral data. Imports from AIA\/ANDI NetCDF\, mzXML\, mzData and mzML files. Preprocesses data for high\-throughput\, untargeted analyte profiling.


.. conda:package:: bioconductor-xcms

   |downloads_bioconductor-xcms| |docker_bioconductor-xcms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.0-1</code>,  <code>4.0.0-0</code>,  <code>3.22.0-0</code>,  <code>3.20.0-1</code>,  <code>3.20.0-0</code>,  <code>3.16.1-1</code>,  <code>3.16.1-0</code>,  <code>3.16.0-0</code>,  <code>3.14.0-0</code>,  </span></summary>
      

      ``4.0.0-1``,  ``4.0.0-0``,  ``3.22.0-0``,  ``3.20.0-1``,  ``3.20.0-0``,  ``3.16.1-1``,  ``3.16.1-0``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.1-0``,  ``3.4.4-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.1-0``,  ``1.48.0-1``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-massspecwavelet: ``>=1.68.0,<1.69.0``
   :depends bioconductor-massspecwavelet: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-mscoreutils: ``>=1.14.0,<1.15.0``
   :depends bioconductor-mscoreutils: ``>=1.14.1,<1.15.0a0``
   :depends bioconductor-msexperiment: ``>=1.4.0,<1.5.0``
   :depends bioconductor-msexperiment: ``>=1.4.0,<1.5.0a0``
   :depends bioconductor-msfeatures: ``>=1.10.0,<1.11.0``
   :depends bioconductor-msfeatures: ``>=1.10.0,<1.11.0a0``
   :depends bioconductor-msnbase: ``>=2.28.0,<2.29.0``
   :depends bioconductor-msnbase: ``>=2.28.1,<2.29.0a0``
   :depends bioconductor-multtest: ``>=2.58.0,<2.59.0``
   :depends bioconductor-multtest: ``>=2.58.0,<2.59.0a0``
   :depends bioconductor-mzr: ``>=2.36.0,<2.37.0``
   :depends bioconductor-mzr: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-protgenerics: ``>=1.34.0,<1.35.0``
   :depends bioconductor-protgenerics: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-spectra: ``>=1.12.0,<1.13.0``
   :depends bioconductor-spectra: ``>=1.12.0,<1.13.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lattice: 
   :depends r-plyr: 
   :depends r-progress: 
   :depends r-rann: 
   :depends r-rcolorbrewer: 
   :depends r-robustbase: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-xcms

   and update with::

      mamba update bioconductor-xcms

  To create a new environment, run::

      mamba create --name myenvname bioconductor-xcms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xcms:<tag>

   (see `bioconductor-xcms/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xcms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xcms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xcms
   :alt:   (downloads)
.. |docker_bioconductor-xcms| image:: https://quay.io/repository/biocontainers/bioconductor-xcms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xcms
.. _`bioconductor-xcms/tags`: https://quay.io/repository/biocontainers/bioconductor-xcms?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xcms";
        var versions = ["4.0.0","4.0.0","3.22.0","3.20.0","3.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xcms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xcms/README.html