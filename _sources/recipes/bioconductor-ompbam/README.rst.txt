:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ompbam'
.. highlight: bash

bioconductor-ompbam
===================

.. conda:recipe:: bioconductor-ompbam
   :replaces_section_title:
   :noindex:

   C\+\+ Library for OpenMP\-based multi\-threaded sequential profiling of Binary Alignment Map \(BAM\) files

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ompBAM.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ompbam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ompbam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ompbam/meta.yaml>`_

   This packages provides C\+\+ header files for developers wishing to create R packages that processes BAM files. ompBAM automates file access\, memory management\, and handling of multiple threads \'behind the scenes\'\, so developers can focus on creating domain\-specific functionality. The included vignette contains detailed documentation of this API\, including quick\-start instructions to create a new ompBAM\-based package\, and step\-by\-step explanation of the functionality behind the example packaged included within ompBAM.


.. conda:package:: bioconductor-ompbam

   |downloads_bioconductor-ompbam| |docker_bioconductor-ompbam|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcpp: 
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

      mamba install bioconductor-ompbam

   and update with::

      mamba update bioconductor-ompbam

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ompbam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ompbam:<tag>

   (see `bioconductor-ompbam/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ompbam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ompbam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ompbam
   :alt:   (downloads)
.. |docker_bioconductor-ompbam| image:: https://quay.io/repository/biocontainers/bioconductor-ompbam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ompbam
.. _`bioconductor-ompbam/tags`: https://quay.io/repository/biocontainers/bioconductor-ompbam?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ompbam";
        var versions = ["1.6.0","1.4.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ompbam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ompbam/README.html