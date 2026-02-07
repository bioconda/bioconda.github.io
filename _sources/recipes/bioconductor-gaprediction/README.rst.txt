:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gaprediction'
.. highlight: bash

bioconductor-gaprediction
=========================

.. conda:recipe:: bioconductor-gaprediction
   :replaces_section_title:
   :noindex:

   Prediction of gestational age with Illumina HumanMethylation450 data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GAprediction.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-gaprediction <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gaprediction>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gaprediction/meta.yaml>`_
   :links: biotools: :biotools:`gaprediction`, doi: :doi:`10.1186/s13059-016-1063-4`

   \[GAprediction\] predicts gestational age using Illumina HumanMethylation450 CpG data.


.. conda:package:: bioconductor-gaprediction

   |downloads_bioconductor-gaprediction| |docker_bioconductor-gaprediction|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-glmnet: 
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

      mamba install bioconductor-gaprediction

   and update with::

      mamba update bioconductor-gaprediction

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gaprediction

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gaprediction:<tag>

   (see `bioconductor-gaprediction/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gaprediction| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gaprediction.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gaprediction
   :alt:   (downloads)
.. |docker_bioconductor-gaprediction| image:: https://quay.io/repository/biocontainers/bioconductor-gaprediction/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gaprediction
.. _`bioconductor-gaprediction/tags`: https://quay.io/repository/biocontainers/bioconductor-gaprediction?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gaprediction";
        var versions = ["1.36.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gaprediction/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gaprediction/README.html