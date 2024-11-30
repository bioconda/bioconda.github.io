:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mbased'
.. highlight: bash

bioconductor-mbased
===================

.. conda:recipe:: bioconductor-mbased
   :replaces_section_title:
   :noindex:

   Package containing functions for ASE analysis using Meta\-analysis Based Allele\-Specific Expression Detection

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MBASED.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mbased <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbased>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbased/meta.yaml>`_
   :links: biotools: :biotools:`mbased`, doi: :doi:`10.1186/s13059-014-0405-3`

   The package implements MBASED algorithm for detecting allele\-specific gene expression from RNA count data\, where allele counts at individual loci \(SNVs\) are integrated into a gene\-specific measure of ASE\, and utilizes simulations to appropriately assess the statistical significance of observed ASE.


.. conda:package:: bioconductor-mbased

   |downloads_bioconductor-mbased| |docker_bioconductor-mbased|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-runit: 
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

      mamba install bioconductor-mbased

   and update with::

      mamba update bioconductor-mbased

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mbased

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mbased:<tag>

   (see `bioconductor-mbased/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mbased| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbased.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mbased
   :alt:   (downloads)
.. |docker_bioconductor-mbased| image:: https://quay.io/repository/biocontainers/bioconductor-mbased/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbased
.. _`bioconductor-mbased/tags`: https://quay.io/repository/biocontainers/bioconductor-mbased?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mbased";
        var versions = ["1.36.0","1.34.0","1.32.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbased/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbased/README.html