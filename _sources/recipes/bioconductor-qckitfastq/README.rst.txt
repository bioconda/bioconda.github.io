:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qckitfastq'
.. highlight: bash

bioconductor-qckitfastq
=======================

.. conda:recipe:: bioconductor-qckitfastq
   :replaces_section_title:
   :noindex:

   FASTQ Quality Control

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/qckitfastq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-qckitfastq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qckitfastq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qckitfastq/meta.yaml>`_

   Assessment of FASTQ file format with multiple metrics including quality score\, sequence content\, overrepresented sequence and Kmers.


.. conda:package:: bioconductor-qckitfastq

   |downloads_bioconductor-qckitfastq| |docker_bioconductor-qckitfastq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rseqan: ``>=1.20.0,<1.21.0``
   :depends bioconductor-seqtools: ``>=1.34.0,<1.35.0``
   :depends bioconductor-zlibbioc: ``>=1.46.0,<1.47.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-rlang: 
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

      mamba install bioconductor-qckitfastq

   and update with::

      mamba update bioconductor-qckitfastq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-qckitfastq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qckitfastq:<tag>

   (see `bioconductor-qckitfastq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qckitfastq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qckitfastq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qckitfastq
   :alt:   (downloads)
.. |docker_bioconductor-qckitfastq| image:: https://quay.io/repository/biocontainers/bioconductor-qckitfastq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qckitfastq
.. _`bioconductor-qckitfastq/tags`: https://quay.io/repository/biocontainers/bioconductor-qckitfastq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qckitfastq";
        var versions = ["1.16.0","1.14.0","1.14.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qckitfastq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qckitfastq/README.html