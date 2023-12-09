:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqvartools'
.. highlight: bash

bioconductor-seqvartools
========================

.. conda:recipe:: bioconductor-seqvartools
   :replaces_section_title:
   :noindex:

   Tools for variant data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SeqVarTools.html
   :license: GPL-3
   :recipe: /`bioconductor-seqvartools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqvartools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqvartools/meta.yaml>`_

   An interface to the fast\-access storage format for VCF data provided in SeqArray\, with tools for common operations and analysis.


.. conda:package:: bioconductor-seqvartools

   |downloads_bioconductor-seqvartools| |docker_bioconductor-seqvartools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.1-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-gdsfmt: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-seqarray: ``>=1.42.0,<1.43.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-gwasexacthw: 
   :depends r-logistf: 
   :depends r-matrix: 
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

      mamba install bioconductor-seqvartools

   and update with::

      mamba update bioconductor-seqvartools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqvartools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqvartools:<tag>

   (see `bioconductor-seqvartools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqvartools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqvartools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqvartools
   :alt:   (downloads)
.. |docker_bioconductor-seqvartools| image:: https://quay.io/repository/biocontainers/bioconductor-seqvartools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqvartools
.. _`bioconductor-seqvartools/tags`: https://quay.io/repository/biocontainers/bioconductor-seqvartools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqvartools";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqvartools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqvartools/README.html