:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-massspecwavelet'
.. highlight: bash

bioconductor-massspecwavelet
============================

.. conda:recipe:: bioconductor-massspecwavelet
   :replaces_section_title:
   :noindex:

   Peak Detection for Mass Spectrometry data using wavelet\-based algorithms

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MassSpecWavelet.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-massspecwavelet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-massspecwavelet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-massspecwavelet/meta.yaml>`_
   :links: biotools: :biotools:`massspecwavelet`

   Peak Detection in Mass Spectrometry data is one of the important preprocessing steps. The performance of peak detection affects subsequent processes\, including protein identification\, profile alignment and biomarker identification. Using Continuous Wavelet Transform \(CWT\)\, this package provides a reliable algorithm for peak detection that does not require any type of smoothing or previous baseline correction method\, providing more consistent results for different spectra. See \<doi\:10.1093\/bioinformatics\/btl355\} for further details.


.. conda:package:: bioconductor-massspecwavelet

   |downloads_bioconductor-massspecwavelet| |docker_bioconductor-massspecwavelet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.60.1-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.60.1-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.1-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-massspecwavelet

   and update with::

      mamba update bioconductor-massspecwavelet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-massspecwavelet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-massspecwavelet:<tag>

   (see `bioconductor-massspecwavelet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-massspecwavelet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-massspecwavelet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-massspecwavelet
   :alt:   (downloads)
.. |docker_bioconductor-massspecwavelet| image:: https://quay.io/repository/biocontainers/bioconductor-massspecwavelet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-massspecwavelet
.. _`bioconductor-massspecwavelet/tags`: https://quay.io/repository/biocontainers/bioconductor-massspecwavelet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-massspecwavelet";
        var versions = ["1.72.0","1.68.0","1.68.0","1.66.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-massspecwavelet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-massspecwavelet/README.html