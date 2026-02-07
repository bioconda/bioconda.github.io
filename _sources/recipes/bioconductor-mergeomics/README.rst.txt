:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mergeomics'
.. highlight: bash

bioconductor-mergeomics
=======================

.. conda:recipe:: bioconductor-mergeomics
   :replaces_section_title:
   :noindex:

   Integrative network analysis of omics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Mergeomics.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mergeomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mergeomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mergeomics/meta.yaml>`_
   :links: biotools: :biotools:`mergeomics`, doi: :doi:`10.1101/036012`

   The Mergeomics pipeline serves as a flexible framework for integrating multidimensional omics\-disease associations\, functional genomics\, canonical pathways and gene\-gene interaction networks to generate mechanistic hypotheses. It includes two main parts\, 1\) Marker set enrichment analysis \(MSEA\)\; 2\) Weighted Key Driver Analysis \(wKDA\).


.. conda:package:: bioconductor-mergeomics

   |downloads_bioconductor-mergeomics| |docker_bioconductor-mergeomics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
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

      mamba install bioconductor-mergeomics

   and update with::

      mamba update bioconductor-mergeomics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mergeomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mergeomics:<tag>

   (see `bioconductor-mergeomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mergeomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mergeomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mergeomics
   :alt:   (downloads)
.. |docker_bioconductor-mergeomics| image:: https://quay.io/repository/biocontainers/bioconductor-mergeomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mergeomics
.. _`bioconductor-mergeomics/tags`: https://quay.io/repository/biocontainers/bioconductor-mergeomics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mergeomics";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mergeomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mergeomics/README.html