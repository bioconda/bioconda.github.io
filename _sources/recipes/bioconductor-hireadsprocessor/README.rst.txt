:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hireadsprocessor'
.. highlight: bash

bioconductor-hireadsprocessor
=============================

.. conda:recipe:: bioconductor-hireadsprocessor
   :replaces_section_title:
   :noindex:

   Functions to process LM\-PCR reads from 454\/Illumina data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/hiReadsProcessor.html
   :license: GPL-3
   :recipe: /`bioconductor-hireadsprocessor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireadsprocessor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireadsprocessor/meta.yaml>`_

   hiReadsProcessor contains set of functions which allow users to process LM\-PCR products sequenced using any platform. Given an excel\/txt file containing parameters for demultiplexing and sample metadata\, the functions automate trimming of adaptors and identification of the genomic product. Genomic products are further processed for QC and abundance quantification.


.. conda:package:: bioconductor-hireadsprocessor

   |downloads_bioconductor-hireadsprocessor| |docker_bioconductor-hireadsprocessor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-hiannotator: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-readxl: 
   :depends r-soniclength: 
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

      mamba install bioconductor-hireadsprocessor

   and update with::

      mamba update bioconductor-hireadsprocessor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hireadsprocessor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hireadsprocessor:<tag>

   (see `bioconductor-hireadsprocessor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hireadsprocessor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hireadsprocessor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hireadsprocessor
   :alt:   (downloads)
.. |docker_bioconductor-hireadsprocessor| image:: https://quay.io/repository/biocontainers/bioconductor-hireadsprocessor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hireadsprocessor
.. _`bioconductor-hireadsprocessor/tags`: https://quay.io/repository/biocontainers/bioconductor-hireadsprocessor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hireadsprocessor";
        var versions = ["1.38.0","1.36.0","1.34.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hireadsprocessor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hireadsprocessor/README.html