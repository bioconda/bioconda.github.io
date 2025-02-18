:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathvar'
.. highlight: bash

bioconductor-pathvar
====================

.. conda:recipe:: bioconductor-pathvar
   :replaces_section_title:
   :noindex:

   Methods to Find Pathways with Significantly Different Variability

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/pathVar.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-pathvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathvar/meta.yaml>`_
   :links: biotools: :biotools:`pathvar`, doi: :doi:`10.7717/peerj.3334`

   This package contains the functions to find the pathways that have significantly different variability than a reference gene set. It also finds the categories from this pathway that are significant where each category is a cluster of genes. The genes are separated into clusters by their level of variability.


.. conda:package:: bioconductor-pathvar

   |downloads_bioconductor-pathvar| |docker_bioconductor-pathvar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-emt: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matching: 
   :depends r-mclust: 
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

      mamba install bioconductor-pathvar

   and update with::

      mamba update bioconductor-pathvar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pathvar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathvar:<tag>

   (see `bioconductor-pathvar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathvar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathvar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathvar
   :alt:   (downloads)
.. |docker_bioconductor-pathvar| image:: https://quay.io/repository/biocontainers/bioconductor-pathvar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathvar
.. _`bioconductor-pathvar/tags`: https://quay.io/repository/biocontainers/bioconductor-pathvar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pathvar";
        var versions = ["1.30.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathvar/README.html