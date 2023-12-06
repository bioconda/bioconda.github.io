:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snagee'
.. highlight: bash

bioconductor-snagee
===================

.. conda:recipe:: bioconductor-snagee
   :replaces_section_title:
   :noindex:

   Signal\-to\-Noise applied to Gene Expression Experiments

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SNAGEE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-snagee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snagee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snagee/meta.yaml>`_
   :links: biotools: :biotools:`snagee`, doi: :doi:`10.1371/journal.pone.0051013`

   Signal\-to\-Noise applied to Gene Expression Experiments. Signal\-to\-noise ratios can be used as a proxy for quality of gene expression studies and samples. The SNRs can be calculated on any gene expression data set as long as gene IDs are available\, no access to the raw data files is necessary. This allows to flag problematic studies and samples in any public data set.


.. conda:package:: bioconductor-snagee

   |downloads_bioconductor-snagee| |docker_bioconductor-snagee|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-2</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-2``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-snageedata: ``>=1.38.0,<1.39.0``
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

      mamba install bioconductor-snagee

   and update with::

      mamba update bioconductor-snagee

  To create a new environment, run::

      mamba create --name myenvname bioconductor-snagee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snagee:<tag>

   (see `bioconductor-snagee/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snagee| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snagee.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snagee
   :alt:   (downloads)
.. |docker_bioconductor-snagee| image:: https://quay.io/repository/biocontainers/bioconductor-snagee/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snagee
.. _`bioconductor-snagee/tags`: https://quay.io/repository/biocontainers/bioconductor-snagee?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snagee";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snagee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snagee/README.html