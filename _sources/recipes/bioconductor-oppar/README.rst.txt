:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oppar'
.. highlight: bash

bioconductor-oppar
==================

.. conda:recipe:: bioconductor-oppar
   :replaces_section_title:
   :noindex:

   Outlier profile and pathway analysis in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/oppar.html
   :license: GPL-2
   :recipe: /`bioconductor-oppar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oppar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oppar/meta.yaml>`_
   :links: biotools: :biotools:`oppar`

   The R implementation of mCOPA package published by Wang et al. \(2012\). Oppar provides methods for Cancer Outlier profile Analysis. Although initially developed to detect outlier genes in cancer studies\, methods presented in oppar can be used for outlier profile analysis in general. In addition\, tools are provided for gene set enrichment and pathway analysis.


.. conda:package:: bioconductor-oppar

   |downloads_bioconductor-oppar| |docker_bioconductor-oppar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-gseabase: ``>=1.68.0,<1.69.0``
   :depends bioconductor-gseabase: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-gsva: ``>=2.0.0,<2.1.0``
   :depends bioconductor-gsva: ``>=2.0.0,<2.1.0a0``
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

      mamba install bioconductor-oppar

   and update with::

      mamba update bioconductor-oppar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-oppar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oppar:<tag>

   (see `bioconductor-oppar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oppar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oppar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oppar
   :alt:   (downloads)
.. |docker_bioconductor-oppar| image:: https://quay.io/repository/biocontainers/bioconductor-oppar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oppar
.. _`bioconductor-oppar/tags`: https://quay.io/repository/biocontainers/bioconductor-oppar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oppar";
        var versions = ["1.34.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oppar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oppar/README.html