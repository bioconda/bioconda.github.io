:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rhtslib'
.. highlight: bash

bioconductor-rhtslib
====================

.. conda:recipe:: bioconductor-rhtslib
   :replaces_section_title:
   :noindex:

   HTSlib high\-throughput sequencing library as an R package

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Rhtslib.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-rhtslib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhtslib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhtslib/meta.yaml>`_
   :links: biotools: :biotools:`rhtslib`, doi: :doi:`10.1038/nmeth.3252`

   This package provides version 1.15.1 of the \'HTSlib\' C library for high\-throughput sequence analysis. The package is primarily useful to developers of other R packages who wish to make use of HTSlib. Motivation and instructions for use of this package are in the vignette\, vignette\(package\=\"Rhtslib\"\, \"Rhtslib\"\).


.. conda:package:: bioconductor-rhtslib

   |downloads_bioconductor-rhtslib| |docker_bioconductor-rhtslib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.1-1``,  ``1.16.1-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-rhtslib

   and update with::

      mamba update bioconductor-rhtslib

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rhtslib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rhtslib:<tag>

   (see `bioconductor-rhtslib/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rhtslib| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhtslib.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rhtslib
   :alt:   (downloads)
.. |docker_bioconductor-rhtslib| image:: https://quay.io/repository/biocontainers/bioconductor-rhtslib/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhtslib
.. _`bioconductor-rhtslib/tags`: https://quay.io/repository/biocontainers/bioconductor-rhtslib?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rhtslib";
        var versions = ["2.4.0","2.4.0","2.2.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhtslib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhtslib/README.html