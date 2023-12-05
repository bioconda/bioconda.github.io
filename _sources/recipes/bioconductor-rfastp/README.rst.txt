:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rfastp'
.. highlight: bash

bioconductor-rfastp
===================

.. conda:recipe:: bioconductor-rfastp
   :replaces_section_title:
   :noindex:

   An Ultra\-Fast and All\-in\-One Fastq Preprocessor \(Quality Control\, Adapter\, low quality and polyX trimming\) and UMI Sequence Parsing\).

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Rfastp.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-rfastp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfastp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfastp/meta.yaml>`_

   Rfastp is an R wrapper of fastp developed in c\+\+. fastp performs quality control for fastq files. including low quality bases trimming\, polyX trimming\, adapter auto\-detection and trimming\, paired\-end reads merging\, UMI sequence\/id handling. Rfastp can concatenate multiple files into one file \(like shell command cat\) and accept multiple files as input.


.. conda:package:: bioconductor-rfastp

   |downloads_bioconductor-rfastp| |docker_bioconductor-rfastp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  <code>1.0.0-2</code>,  </span></summary>
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rhtslib: ``>=2.4.0,<2.5.0``
   :depends bioconductor-rhtslib: ``>=2.4.0,<2.5.0a0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-rjson: 
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

      mamba install bioconductor-rfastp

   and update with::

      mamba update bioconductor-rfastp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rfastp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rfastp:<tag>

   (see `bioconductor-rfastp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rfastp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rfastp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rfastp
   :alt:   (downloads)
.. |docker_bioconductor-rfastp| image:: https://quay.io/repository/biocontainers/bioconductor-rfastp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rfastp
.. _`bioconductor-rfastp/tags`: https://quay.io/repository/biocontainers/bioconductor-rfastp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rfastp";
        var versions = ["1.12.0","1.10.0","1.8.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rfastp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rfastp/README.html