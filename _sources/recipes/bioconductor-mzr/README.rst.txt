:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mzr'
.. highlight: bash

bioconductor-mzr
================

.. conda:recipe:: bioconductor-mzr
   :replaces_section_title:
   :noindex:

   parser for netCDF\, mzXML\, mzData and mzML and mzIdentML files \(mass spectrometry data\)

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/mzR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mzr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mzr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mzr/meta.yaml>`_
   :links: biotools: :biotools:`mzr`

   mzR provides a unified API to the common file formats and parsers available for mass spectrometry data. It comes with a subset of the proteowizard library for mzXML\, mzML and mzIdentML. The netCDF reading code has previously been used in XCMS.


.. conda:package:: bioconductor-mzr

   |downloads_bioconductor-mzr| |docker_bioconductor-mzr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.36.0-1</code>,  <code>2.36.0-0</code>,  <code>2.34.1-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.28.0-2</code>,  <code>2.28.0-1</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  </span></summary>
      

      ``2.36.0-1``,  ``2.36.0-0``,  ``2.34.1-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.28.0-2``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.1-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.16.2-1``,  ``2.16.2-0``,  ``2.16.0-0``,  ``2.12.0-1``,  ``2.10.0-0``,  ``2.6.3-1``,  ``2.6.3-0``,  ``2.4.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-protgenerics: ``>=1.34.0,<1.35.0``
   :depends bioconductor-protgenerics: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-rhdf5lib: ``>=1.24.0,<1.25.0``
   :depends bioconductor-rhdf5lib: ``>=1.24.0,<1.25.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ncdf4: 
   :depends r-rcpp: ``>=0.10.1``
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

      mamba install bioconductor-mzr

   and update with::

      mamba update bioconductor-mzr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mzr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mzr:<tag>

   (see `bioconductor-mzr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mzr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mzr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mzr
   :alt:   (downloads)
.. |docker_bioconductor-mzr| image:: https://quay.io/repository/biocontainers/bioconductor-mzr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mzr
.. _`bioconductor-mzr/tags`: https://quay.io/repository/biocontainers/bioconductor-mzr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mzr";
        var versions = ["2.36.0","2.36.0","2.34.1","2.32.0","2.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mzr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mzr/README.html